class IdManager{
	//Every id should be unique.
	static todoIdDict = [];

	//Generate a unique id for each todo
	static generateId(){
		let i = 0;
		while(this.todoIdDict.indexOf(i) >= 0){
			i++;
		}
		this.todoIdDict.push(i);
		return i;
	}

	static getIdDictionary(){
		return this.todoIdDict;
	}

	//Since we don't have a db, we don't have an ID dictionary yet. So add them manually.
	//This function mutates the given object @dbMock
	static setIds(dbMock){
		dbMock.forEach((mock)=>{
			mock.id = this.generateId();
		});
	}
}

module.exports = IdManager;