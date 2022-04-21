// Our first Blockchain Transaction
/* Transaction Objects linked by a basic prototype setup

1. We make a sender email 
2. We make a recipient email 
3. We make some funds (fake amount of bitcoin)

Example: Mildred uses her bitcoin to buy some coffee from Alex's coffee shop

We will use Object.create to establish a connection between two objects.
*/

// Prototype object from which to derive other objects. A regular object (not an abstract blueprint)
const transaction = {
  sender: "mildred@email.com",
  recipient: "alex@email.com",
};

// Create a derived object from the prototype
const moneyTransaction = Object.create(transaction);
moneyTransaction.funds = 0.0;

// Adds new methods to the child object
// Repeating the function name in the declaration helps build more informative stack traces
moneyTransaction.addFunds = function addFunds(funds = 0) {
  this.funds += Number(funds);
};

moneyTransaction.addFunds(10.0);
moneyTransaction.funds;

// Check wether the prototype link has been established
Object.getPrototypeOf(moneyTransaction) === transaction; // true
// Verifies inherited properties are accesible from child object
moneyTransaction.sender; // mildred@email.com
moneyTransaction.funds; // 10.0

/* Object.create() second parameter -
This parameter receives an object of data descriptors */
const moneyTransaction = Object.create(transaction, {
  funds: {
    value: 0.0,
    enumerable: true,
    writable: true,
    configurable: false,
  },
});

// Creating a simple (insecure) hashing function in the listing
const hashTranscation = Object.create(transation);

hashTranscation.calculateHash = function calculateHash() {
  // Adds method to calculate hash
  const data = [this.sender, this.recipient].join("");
  // Properties that become input to hashing algorithm
  let hash = 0,
    i = 0;
  while (i < data.length) {
    hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
  }
  return hash ** 2; // Uses exponential equator to square hash value
};

hashTranscation.calculateHash(); //will return calculated hash
