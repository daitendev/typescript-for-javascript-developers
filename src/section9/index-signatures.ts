export { }

interface Profile {
  name: string
  underTwenty: boolean
  [index: string]: string | number | boolean
}

let profile: Profile = { underTwenty: false, name: 'Manu' }

// how to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Manu'
profile.age = 30
profile.nationality = 'japan'