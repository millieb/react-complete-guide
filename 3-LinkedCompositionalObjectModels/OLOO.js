/* 3.2 - OLOO */

// OLOO's view of differential inheritance is that it does not
// consider child objects to derive from a base object.
// Rather, it considers peers that link together
// and also delegate functinoality by passing messages to each other.
// AN OBJECT LINKS TO ANOTHER.

/* Under hood of Object.create */ /*
Object.create = funtion(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + 
        proto);
    }

    // Creates a new superfluous constructor function, F
    function F() {}

    // Sets the prototype of the constructor function
    F.prototype = proto;

    // Returns the new object invoking the new keyboard
    return new F();
};
*/

// Let's start wiring up the chain and connect all of our objects.
