// Basic class
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hi ${this.name}`);
    }
}

// Class which extends the above
class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    great() {
        console.log(`Hello ${this.name} from ${this.level}`);
    }
}

// Creating new instances of the Person and Student objects
const personOne = new Person("Tom");
const studentOne = new Student("Richard", "Top");