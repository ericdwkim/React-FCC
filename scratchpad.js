// Initializing a constructor 
class Barista {
    constructor(name) {
        this.name = 'Selma';
    }
}

// introduce() {
//     console.log(`Hello, I work at local coffee at the Pearl and my name is ${this.name}`);
// }

// const selma = new 


const brunetteBarista  = Barista 
const blondeBarista  = new Barista


console.log(typeof brunetteBarista)
// >> function
console.log(typeof blondeBarista )
// >> object; due to `new` keyword which points to its prototype `Object`


/* equivalent to constructor in python:

class someClass(arg):

    def __init__(self):
        self.property = property

someVar = someClass()

*/

