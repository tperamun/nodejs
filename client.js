
const Savings = require('./savings');
const Checkings = require('./checkings');

class Client{

	constructor(id, name,Checkings, Savings){
		
		this.id = id;
		this.name = name;
		this.savings = Savings;
		this.checkings = Checkings;
	}

	//create if no checking exists

	//only manager can create accounts
	create_checkings_account(Checkings){
			this.checkings = Checkings;
	}
	
	//certate if no savings exists

	create_savings_account(Savings){
		this.savings = Savings;
	}
		
	//withdraw
	
	withdraw_from_savings(withdraw_amount){
		//need to do necessary checks							
		this.savings.balance-=withdraw_amount;		
	}	

	withdraw_from_checkings(withdraw_amount){
		//need to do necessary checks
		this.checkings.balance-=withdraw_amount;
	}

	//deposit
	
	deposit_to_checkings(deposit_amount){
				
		this.checkings.balance+=deposit_amount;
	}
	
	deposit_to_savings(deposit_amount){

		this.savings.balance+=deposit_amount;
		
	}

	//transfer
		
	transfer_from_checkings_to_savings(transfer_amount){
		this.checkings.transfer_to_savings(transfer_amount);
	}
	
	transfer_from_savings_to_checkings(transfer_amount){
		this.savings.transfer_to_checkings(transfer_amount);
	}

	//print recent transactions
	


}

//client = new Client("Timal", );
//console.log(client);


checkings = new Checkings(20);

savings = new Savings(202, checkings);
savings.transfer_to_checkings(5);

console.log(savings);
