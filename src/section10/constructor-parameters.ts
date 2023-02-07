export { }

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let taro = new Person('taro', 30)
console.log(taro)

type PersonType = typeof Person

type Profile = ConstructorParameters<PersonType>

const profile: Profile = ['manu', 30]
const manu = new Person(...profile)
console.log(manu)

type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;