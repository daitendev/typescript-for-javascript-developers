export { }

type Mojiretsu = string

const fooString: string = 'hello'
const fooMojiretsu: Mojiretsu = 'hello'

type Profile = {
  name: string;
  age: number;
}

const example1: Profile = {
  name: 'Manu',
  age: 20
}

type Profile2 = typeof example1 