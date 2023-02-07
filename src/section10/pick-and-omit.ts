export { }

type DetailedProfile = {
  name: string
  height: number
  weight: number
}

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>
type SmallProfile = Omit<DetailedProfile, 'weight'>

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>
type typeMySmallProfile = MyOmit
