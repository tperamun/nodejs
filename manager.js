
const client = require('./client');

module.exports = class Manager{

	constructor(name){
		this.name = name;
	}
	
	
	create_client(id, name, checkings, savings){
		this.client = new Client(id, name, checkings, savings);
	}
	
	remove_client(id){

		

	}
	

}
