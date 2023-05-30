
// CLASSES IN TYPESCRIPT
// classes are blueprints for creating objects

class Account {
  // Account properties (public by default)
  readonly id: number
  owner: string
  private _balance: number // private - meaning we cannot access this outside of the class
  nickname?: string

  constructor(id: number, owner: string, balance: number) {
    this.id = id
    this.owner = owner
    this._balance = balance
  }

  // Account method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount')
    } else {
      // Record a transaction
      this._balance += amount
    }
  }

  // GETTER: rather than creating a method called getBalance() and then referencing as account.getBalance()
  // we can use a getter to publically use as account.balance
  get balance(): number {
    return this._balance
  }

  // SETTER. Commenting out as we don't want to be able to set the balance (should be dealt with via transaction changes)
  // i.e. we don't want to do account.balance = 0!
  // set balance(value: number) {
  //   if (value < 0) {
  //     throw new Error('Invalid value')
  //   } else {
  //     this._balance = value
  //   }
  // } 
}

let account = new Account(1, 'Mosh', 0)
account.deposit(100)
console.log(account.balance)


// INDEX SIGNATURES
// Creating a class to assign seating arrangements for a concert
class SeatAssignment {
  // Index signature property.  
  // Intead of assigning individual seats (i.e. A1, A2) - imagine if 1000 seats!
  [seatNumber: string]: string
}

let seats = new SeatAssignment()

// similar to writing seats[A1] = 'James'
seats.A1 = 'James'
seats.A2 = 'Ross'



// STATIC MEMBERS
// static property is something that belongs to the class and not the object
// so there is only one instance of that property in memory
// i.e. we want a singular activeRides that can be used for multiple defined rides
class Ride {
  private static _activeRides: number = 0

  start() { Ride._activeRides++ }
  stop() { Ride._activeRides-- }

  static get activeRides() {
    return Ride._activeRides
  }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(Ride.activeRides)
// now we can't do the below as it is readonly
// Ride.activeRides = 20


// INHERITANCE
// we dont want to repeat code if duplicated in more than one place
// i.e. create a Teacher and Student class that both have talk(), walk() etc methods.
class Person {
  // definging the properties directly within the constructor is possible like this:
  constructor(public firstName: string, public lastName: string) {}

    get fullName() {
      return this.firstName + ' ' + this.lastName
    }

    walk() {
      console.log('Walking')
    }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  takeTest(){
    return console.log('Taking test')
  }
}

let student = new Student(1, 'James', 'Gulland')
// console.log(student.takeTest())


// METHOD OVERRIDING
// if for example we wanted to use the get fullName class method, but append a Professor at the front
// We need to do this with method overriding

class Teacher extends Person {
  // using override to override the method defined in Person
  override get fullName() {

    // using the super to inherit the name from the class (instead of writing out this.firstName, this.lastName...)
    return 'Professor' + super.fullName
  }

}

let teacher = new Teacher('John', 'Smith')



// POLYMORPHISM
// Many Forms - where an object can take many forms

// function to print names of People, looping through an array and logging their full name
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName)
  }
}

// calling the function.  
printNames([
  new Student(1, 'John', 'Smith'),
  new Teacher('Sam', 'Harris')
])



// INTERFACE
// no such thing as an interface in JavaScript, purely a TS thing
// A bit like an abstract class but reusable
// I.e. having a calendar class, which uses iCal, Google, Outlook - similar methods but different execution
// only define methods
interface Calendar {
  name: string
  addEvent(): void
  removeEvent(): void
}

// You can then extend interface like this:
interface CloudCalendar extends Calendar {
  // example method that syncs calendars to cloud
  sync(): void
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.")
  }
  removeEvent(): void {
    throw new Error("Method not implemented.")
  }

}

// EXERCISE:

class Logger {
  constructor(public name: string) {}

  writeMessage() {
    console.log(this.name)
  }
}

class PersonExercise {
  constructor(public firstName: string, public lastName: string) {}

  get fullname(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

class EmployeeExercise extends PersonExercise {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName)
  }
}

interface EmployeeInterface {
  name: string
  salary: number
  address: Address
}

interface Address {
  street: string
  city: string
  zipCode: number
}