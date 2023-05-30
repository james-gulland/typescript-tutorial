// GENERICS
// allows us to create reusable classes, interfaces, functions.

// GENERIC CLASSES
// allows us using the <> defintions to swap between types for the key value pair
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// we don't need to explicitly refer to KeyValuePair<string, string> here as the code will know
let pair = new KeyValuePair('1', 'a')


// GENERIC FUNCTIONS
// written in a similar way to classes

function wrapInArray<T>(value: T) {
  return [value]
}

let numberArray = wrapInArray(1)
console.log(numberArray)

// GENERIC INTERFACES
// for example if have website and using /users or /products endpoints to grab the data

interface Result<T> {
  data: T | null,
  error: string | null
}

function fetch<T>(url: string): Result<T>{
  return { data: null, error: null}
}

interface Product {
  title: string
}

let result = fetch<Product>('url')

// GENERIC CLASSES

interface Product {
  name: string
  price: number
}

class Store<T> {
  protected _objects: T[] = []

  add(obj: T): void {
    this._objects.push(obj)
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value)
  }
}

let store = new Store<Product>()
// store.add({ name: 'a', price: 1 })

// EXERCISES:

function echo<T>(arg: T): T {
  return arg
}