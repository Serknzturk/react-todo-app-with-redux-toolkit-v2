import { setupServer } from 'msw/node';
import { rest } from 'msw';
import preloadedDbMock from './preloadedDbMock.js';
const idDict = [0,1,2,3];

export const handlers = [
	//Normally absolute path isn't required, however, we are using different port for the server. So mock it as well.
  	rest.get('http://localhost:8081/api/todos', (req, res, ctx) => {
    	return res(ctx.json(preloadedDbMock.preloadedState.allToDos.todos), ctx.delay(150))
  	}),

  	rest.post('http://localhost:8081/api/todo-check', (req,res, ctx)=>{
		console.log('[Server Mock] @Change Check Status of Item by Id: '+req.body.id);

  		const data = req.body;
  		data.checked = !data.checked;

  		return res(ctx.json(data), ctx.delay(150));
  	}),

	rest.post('http://localhost:8081/api/todo-add', (req, res, ctx)=> {
		console.log('[Server Mock] @Add Item:');
		console.log(req.body);
		const newItem = {
			id:idDict.length + 1,
			title:req.body.title || 'Got New Item',
			checked:false,
		}

		//Move on like some server actions taken place.
		return res(ctx.json(newItem));
	}),

	rest.post('http://localhost:8081/api/todo-remove', (req,res, ctx)=> {
		console.log('[Server Mock] @Remove Item By Id: '+req.body.id);

		//Move on like some server actions taken place.
    	return res(
    		ctx.json({id:req.body.id})
    	)

	})

]

const serverMock = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => serverMock.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => serverMock.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => serverMock.close())

export default serverMock;