export { }

type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: 'Manu',
  age: 30
}

me.age++

console.log(me)

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: 'bou',
  age: 30
}

// friend.age++

type YomitoriSenyou<T> = { readonly [P in keyof T]: T[P] }
type Yomitori = YomitoriSenyou<Profile>