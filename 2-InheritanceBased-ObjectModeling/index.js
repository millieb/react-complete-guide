// Object.create(proto[,propertiesObject]);

// An API to establish a parent-child relationship

// This API created a new object linked to a propotype
// optionally it can come with new property definitions

const proto = {
  sender: "mildred@email.com",
};
const child = Object.create(proto);
child.recipient = "alex@email.com";

child.sender; // mildred.brito@outlook.com
child.recipient; // valenzuela.alejandro19@gmail.com

/*
In line 11 we are creating a new child object based on a parent object (proto).
The child object now has access to the parent' properties.
The parent's properties are now known as the prototype.
*/
