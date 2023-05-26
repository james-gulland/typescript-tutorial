"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        else {
            this._balance += amount;
        }
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'Mosh', 0);
account.deposit(100);
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'James';
seats.A2 = 'Ross';
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        return console.log('Taking test');
    }
}
let student = new Student(1, 'James', 'Gulland');
class Teacher extends Person {
    get fullName() {
        return 'Professor' + super.fullName;
    }
}
let teacher = new Teacher('John', 'Smith');
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Sam', 'Harris')
]);
//# sourceMappingURL=classes.js.map