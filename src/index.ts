// INTRO TO TYPESCRIPT
// Is static-checking, like C# or C++

// REFERENCE:
// use 'tsc' to compile down to JavaScript
// use 'node dist/[filename.js] to run the compiled file
// combine into 2: 'tsc && node dist/[filename.js]'


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
// combing types with &, i.e. can be both number and string at same time
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
// using the '?.' - the dot is a chainging operator
// will only get executed if it is present (i.e. not null or undefined)
type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

// NULLISH COAELSCING OPERATOR
// using '??' to check 
let speed: number | null = null
let ride = {
  // nullish
  // if speed is not null or undefined, use 'speed' otherwise use 30
  speed: speed ?? 30
}

// TYPE ASSERTIONS
// being explicit about the type so that intellisense can work
// no type conversion happening here (like C#)
let phone = document.getElementById('phone') as HTMLInputElement
// can also be written like this:
// let phone = <HTMLInputElement> document.getElementById('phone')

// now when do 'phone.' it will show associated properties
phone.value

// UNKNOWN and NEVER TYPE
// unknown is preferred to using 'any' type

