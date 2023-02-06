export { }

class Person {
  constructor(
    public name: string,
    protected age: number
  ) { }
}

const manu = new Person('manu', 30)
console.log(manu)