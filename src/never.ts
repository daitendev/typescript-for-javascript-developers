export { }

function error(message: string): never {
  throw new Error(message)
}

try {
  let result = error('test')
  console.log({ result })
} catch (error) {
  console.log({ error })
}

let foo: void = undefined
// let bar1: never = null
let bar2: never = error('only me!')