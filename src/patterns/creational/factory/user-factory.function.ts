function uuid() {
  return 42
}
export function createUser({name = 'No Name', age = 18, id = uuid()}) {
  return {
    id,
    name,
    age
  }
}

createUser({age: 18})