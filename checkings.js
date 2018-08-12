const Savings = require('./savings');


module.exports = class Checkings{

	constructor(balance, Savings){
		
		this.balance = balance;
		this.savings = Savings;
	}
	

	deposit(deposit_amount){

		this.balance+=deposit_amount;

	}
	
	withdraw(withdraw_amount){

		this.balance-=withdraw_amount;

	}

	transfer_to_savings(transfer_amount){

		//must do valid checks later
		this.savings.balance+=transfer_amount;
		this.balance-=transfer_amount;

	}

}

