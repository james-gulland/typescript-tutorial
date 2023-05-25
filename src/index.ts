// INTRO TO TYPESCRIPT
// Is static-checking, like C# or C++


// declaring a number in TypeScript (explicit)
let sales: number = 123456789
let course: string = 'TypeScript'

// can also be implicitly declared
let digit = 1234
console.log(typeof(digit))

// declaring an array that is NOT any (i.e. declaring array of numbers)
// using TypeScript means you can use intellisense to show what methods are supported
// i.e. numbers.forEach(num => num.) will show what is available to use
let numbers: number[] = [1, 2, 3]

// TUPLE: declaring a tuple
// recommended to keep them single, ideally 2 values, which key value pairs
let user: [number, string] = [1, 'James']

// ENUMS, used in C#, can replace the below declarations
// const small = 1
// const medium = 2
// const large = 3
// written in PascalCase
const enum Size  { Small = 1, Medium = 2, Large = 3 }
let mySize: Size = Size.Medium
console.log(mySize)

// FUNCTIONS
// you have to annotate the return and parameters of the function.
// or use VOID if there is no return value
// you can set optional taxYear but you will need to define a value to fallback on.
function calculateTax(income: number, taxYear = 2023): number {
  if (taxYear < 2022) {
    return income * 1.2
  }

  return income * 1.3
}

// example of taxYear is optional in use
console.log(calculateTax(10_000))

// OBJECTS - again - having to define the types upfront
// putting optional property as '?'
// we can use 'readonly' property to make sure we don't overwrite these values
// it can be optimised, as below type aliases
let employee: {
  readonly id: number,
  name: string,
  fax?: number
} = { id: 1, name: 'James' }

// i.e. this won't work as readonly
// employee.id = 1

// TYPE ALIASES
// instead of declaring the object properties a number of times, can re-use in multiple places
// using tyhe type aliases as below:
type Employee = {
  readonly id: number,
  name: string,
  fax?: number,
  retire: (date: Date) => void
}

let newEmployee: Employee = {
  id: 1,
  name: 'James',
  retire: (date: Date) => {
    console.log(date)
  }
}

// UNION TYPES
// possible to give a variable or function more than one type using '|'
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2
  } else {
    return parseInt(weight) * 2.2
  }
}

console.log(kgToLbs(23))
console.log(kgToLbs('23'))

// INTERSECTION TYPES
// combing types with &, can be both number and string at same time
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// LITERAL TYPES
// Sometimes we want to limit the variables with exact or specific value
// i.e. 'let quantity: number' <- can be any number
type Quantity = 50 | 100
let quantity: Quantity = 100

// NULLABLE TYPES
// TS is very strict but if we want to pass null, we can use '|'
function greet(name: string | null | undefined ) {
  if (name) {
    console.log(name.toUpperCase())
  } else {
    console.log('Hola!')
  }
}

console.log(greet(null))
// console.log(greet(undefined))

// OPTIONAL CHAINING
type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

