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

// left of: 2.2.2 Sharing Properties by Using Constructors and Prototypes
