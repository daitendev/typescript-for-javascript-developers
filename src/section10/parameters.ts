export { }

const debugProfile = (name: string, age: number) => {
  console.log({ name, age })
}

debugProfile('manu', 30)

type Profile = Parameters<typeof debugProfile>

const profile: Profile = ['Manu', 80]

debugProfile(...profile)

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;