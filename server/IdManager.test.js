const IdManagerClass = require('./IdManager');

describe('IdManager Class Unit Test', ()=>{

	test('@generateId method should generate unique Ids', ()=>{
		const expected = 0;
		expect(IdManagerClass.generateId()).toBeGreaterThanOrEqual(expected);
	});

	test('@generateId method should store data in dictionary for uniqueness', ()=>{
		const expected = 1;
		expect(IdManagerClass.getIdDictionary().length).toBeGreaterThanOrEqual(expected);
	});


});