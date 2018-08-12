
const Checkings = require('./checkings');

module.exports = class Savings{

	constructor(balance, Checkings){
		
		this.balance = balance;
		this.checkings = Checkings;
	}
	

	deposit(deposit_amount){
		//must do valid checks for negative numbers
		this.balance+=deposit_amount;

	}
	
	withdraw(withdraw_amount){

		//must do valid checks later
		this.balance-=withdraw_amount;

	}

	transfer_to_checkings(transfer_amount){

		//must do valid checks later
		this.checkings.balance+=transfer_amount;
		this.balance-=transfer_amount;

	}

}






