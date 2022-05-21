/* 3.1 - Types of Object Links */

/* Implicit Link
> Known only internally 
> Runtime uses it to send messages to other objects (up the chain)
    on your behalf as part of property resolution. */

// Implicit Reference Example
const Foo = Object.create(UpperCaseFormatter);
Foo.saySomething = function saySomething(msg) {
  console.log(this.format(msg)); // Format is resolved through prototype chain
};
Foo.saySomething("hello"); // Print Hello
// Foo 'is a' UpperCaseFormatter. Enphasis on the 'is a' relationship.

/* Explicit Link
> The link is well known and set visibly in the code (through public or private property) */

// Explicit Reference Example
const UpperCaseFormatter = {
  format: function (msg) {
    return msg.toUpperCase();
  },
};

const Foo = {
  formatter: UpperCaseFormatter, // Explicitly pass an object to another
  saySomething: function print(msg) {
    console.log(this.formatter !== null ? this.formatter.format(msg) : msg);
  },
};

Foo.saySomething("hello"); // Prints HELLO

// Foo uses UpperCaseFormatter to carry out its work.
