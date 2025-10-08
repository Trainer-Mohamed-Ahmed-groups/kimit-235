import sayHello, { x, y } from "./session.js";

var person = {
    name: "Ali",
    age: 20,
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(person);
console.log(person["age"]);
console.log(person.name);
person.sayHello()


person.job = "Engineer";
console.log(person);

// constructor function
function Car(model, color, price, name) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.name = name;
}

var mercedesCar = new Car(2024, "black", 2000000, "E200")
var toyotaCar = new Car(2012, "White", 150000, "Hilux")

console.log(mercedesCar);
console.log(toyotaCar);



class Person {
    constructor(name = "", age = 0) {
        this.name = name;
        this.age = age
    }

    sayHello = () => {
        return ("Hello, my name is " + this.name);
    }

    static sayMyAge = () => {
        return ("Hello, my age is " + this.name);
    }
}

var personOne = new Person("Omar", 20)
console.log(personOne);
console.log(personOne.sayHello());
console.log(Person.sayMyAge());


class Doctor extends Person {
    constructor(name, age, title, lastName) {
        super(name, age)
        this.title = title;
        this.lastName = lastName
    }

    set changeTitle(newTitle) {
        this.title = newTitle;
    }

    get fullName() {
        // return `${this.name} ${this.lastName}`
        return this.name + " " + this.lastName
    }

}

var doctorOne = new Doctor("Osman", 36, "Prof", "Khaled")

console.log(doctorOne);
console.log(Doctor.sayMyAge());
console.log(doctorOne.sayHello());
doctorOne.changeTitle = 'Prof new value';

console.log(doctorOne);
console.log(doctorOne.fullName);


sayHello()
console.log(x);
console.log(y);
console.log(x + y);
