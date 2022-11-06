const IdManagerClass = require('./IdManager.js');
let dbMock = require('./dbMock.js');

class DbManager{
	constructor(){
		//Nothing to inject
	}

	init(){
		IdManagerClass.setIds(dbMock);
	}

	addItem(item){
		item = this.validateWithSchema(item);
		dbMock.push(item);
		return item;
	}

	removeItem(id){
		dbMock = dbMock.filter(data=>data.id !== id);
		return id;
	}

	getItems(){
		return dbMock;
	}

	getSingleItemById(id){
		const items = this.getItems();

		for(let i = 0; i < items.length; i++){
			if(items[i].id === id){
				return items[i];
			}
		}

		return false;
	}

	//Normally this should throw some errors, but to keep it simple, I will add placeholders
	validateWithSchema(item){
		const currentDate = new Date();
		const schema = {
			title: item.hasOwnProperty('title') ? item.title : 'Should Throw No Title Error',
			checked: item.hasOwnProperty('checked') ? item.checked : false,
			date:{
				d:currentDate.getDate().toString().padStart(2, "0"),
				m:(currentDate.getMonth() + 1).toString().padStart(2, "0"),
				y:currentDate.getFullYear()
			}
		}

		if(item.hasOwnProperty('id')){
			schema.id = item.id;
		}else{
			schema.id = IdManagerClass.generateId();
		}

		return schema;
	}

	//This method sets item status to checked/unchecked.
	checkItem(itemSettings){
		const singleItem = this.getSingleItemById(itemSettings.id);
		if(singleItem === false) return 'Element Id Does Not Exists';

		singleItem.checked = !itemSettings.checked;

		return singleItem;
	}
}

module.exports = DbManager;