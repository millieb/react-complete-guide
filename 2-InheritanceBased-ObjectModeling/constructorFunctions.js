/* Using functions to build objects is the preferred approach 
because it makes the code simpler and maintainable */

// Base Constructor
function Transaction(sender, recipient) {
  this.sender = sender;
  this.recipient = recipient;
}

// Detects if the instantiation of the child object omits the new keyword and
// fixes the call.
function HashTransaction(sender, recipient) {
  if (!new.target) {
    return new HashTransaction(sender, recipient);
  }
  // Calls the parents constructor to initialize any parent member properties
  // into this objects context
  Transaction.call(this, sender, recipient);

  // Adds a new calculateHash method to every instance created
  this.calculateHash = function calculateHash() {};
}

const tx = new HashTransaction("mildred@email.com", "alex@email.com");
tx.calculateHash(); // returns hash value
tx.sender; // 'mildred@email.com'

/* left of: 2.2.2 Sharing Properties by Using Constructors and Prototypes */

// Adding calculateHash to HasTransactions to make it shareable among all HashTransaction instances
HashTransaction.prototype.calculateHash = function calculateHash() {
  const data = [this.sender, this.recipient].join("");
  let hash = 0,
    i = 0;
  while (i < data.length) {
    hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
  }
  return hash * 2;
};

// Adding a new method to Transaction.prototype to make function shareable among all objects
Transaction.prototype.displayTransaction = function displayTransaction() {
  return "Transaction from ${this.sender} to ${this.recipient}";
}; // To avoid any type errors we need to configure the prototype chain

/* 2.6: Configuring the Prototype Chaing using the Constructor Functions Pattern */

// Links prototypes for the lookup mechanism to work in case you need to resolve properties
// from Transaction.prototype
HashTransaction.prototype = Object.create(Transaction.prototype);

// Fixes or sets the constructor value
// Without this line, tx would be a transaction object or constructed from transaction
HashTransaction.prototype.constructor = HashTransaction;
