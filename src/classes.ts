
// CLASSES IN TYPESCRIPT
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