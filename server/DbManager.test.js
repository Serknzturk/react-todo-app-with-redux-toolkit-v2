const DbManagerClass = require('./DbManager');

describe('DbManager Class Unit Test', ()=>{

	const DbManager = new DbManagerClass();
	DbManager.init();

	test('@init method should set unique Ids to all items on construct', ()=>{
		const expected = 'id';
		expect(DbManager.getItems()[0]).toHaveProperty(expected);
	});


	test('@addItem method should add a new item', ()=>{
		const current = DbManager.getItems().length;
		const expected = current + 1;
		const mockItem = {
			'title':'New Item',
			'checked':true
		}

		DbManager.addItem(mockItem);

		expect(DbManager.getItems().length).toEqual(expected);
	});

	test('@addItem method should add a new item, even wrong values are sent', ()=>{
		const current = DbManager.getItems().length;
		const expected = current + 1;
		const mockItem = {
			'fake':'New Item',
			'make':false
		}
		
		DbManager.addItem(mockItem);

		expect(DbManager.getItems().length).toEqual(expected);
	});

	test('@getSingleItemById method should return item by id', ()=>{
		const expected = {
			id:0,
			title:'Handle the UI',
			checked:false
		};
		const mockItemId = 0;

		expect(DbManager.getSingleItemById(mockItemId)).toStrictEqual(expected);
	});

	test('@getSingleItemById method should return false if given Id does not exists', ()=>{
		const expected = false;
		const mockItemId = 10;

		expect(DbManager.getSingleItemById(mockItemId)).toStrictEqual(expected);
	});

	test('@removeItem method should remove an item by Id', ()=>{
		const current = DbManager.getItems().length;
		const expected = current - 1;
		const mockItemId = 0;

		DbManager.removeItem(mockItemId);

		expect(DbManager.getItems().length).toEqual(expected);
	});

	test('@validateWithSchema method should build an element, even given data is misformatted', ()=>{
		const expected = {
			title:'Should Throw No Title Error',
			checked:false
		};
		const mockItem = {
			wrongInput:'I want to send something wrong',
			baked:'has it baked?'
		};

		const result = DbManager.validateWithSchema(mockItem);

		expect(result.title).toEqual(expected.title);
		expect(result.checked).toEqual(expected.checked);
	});


	test('@checkItem method should toggle checked status of the item', ()=>{
		const expected = {
			id:3,
			title:'Go for shopping and get some milk',
			checked:true
		};
		const mockItem = {
			id:3,
			title:'Go for shopping and get some milk',
			checked:false
		}

		expect(DbManager.checkItem(mockItem)).toStrictEqual(expected);
	});


});