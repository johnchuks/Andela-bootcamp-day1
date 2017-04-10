

 function bankAccount (firstName, lastName, balance) {
  
  this.firstName = firstName;
  
  this.lastName = lastName;
  
  this.balance = balance;
  
}

 function currentAccount (firstName, lastName, balance, accountNumber) {
  
  bankAccount.call(this,firstName, lastName, balance);
  
 
  currentAccount.prototype = Object.create(bankAccount.prototype);
  
  currentAccount.prototype.constructor = currentAccount;
  
   this.accountNumber = accountNumber;
  
  if (typeof(this.accountNumber) === 'number') {
    
    var number = (''+this.accountNumber).split('');
     
    if (number.length === 9) {
    
     return this.accountNumber;
  }
  else  {
    
    this.accountNumber ="Invalid current account Number";
  }
  }
 
  
}


 function savingsAccount(firstName, lastName, balance,accountNumber) {
  
  bankAccount.call(this,firstName, lastName, balance);
  
  this.accountNumber = accountNumber;

  savingsAccount.prototype = Object.create(bankAccount.prototype);
  
  savingsAccount.prototype.constructor = savingsAccount;

  
  
  if (typeof(this.accountNumber) === 'number') {
  
    var number = (''+this.accountNumber).split('');
  
    if (number.length === 8) {
    
      this.accountNumber;
  }
    else if (number.length !== 8) {
    
     this.accountNumber = 'Invalid savings account number';
  }
  
}
}



 var newSavingsAccountHolder = new savingsAccount('Johnbosco', 'Ohia', 1000000, 309594043);

console.log(newSavingsAccountHolder);

var newSavingsAccountHolder1 = new savingsAccount('James', 'Wilson', 50000, 30958649);

console.log(newSavingsAccountHolder1);

var currentAccountHolder = new currentAccount('Laurence', 'Johnson', 200000, 304956849);

console.log(currentAccountHolder);

