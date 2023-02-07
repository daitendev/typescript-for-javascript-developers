export { }

type DebugType = () => void
type SomeTypes = string | number | DebugType


type FunctionType = Exclude<SomeTypes, string | number>
type NunFunctionType = Exclude<SomeTypes, DebugType>
type TypeExcludingFunction = Exclude<SomeTypes, Function>

type MyExclude =
  (string extends string | number ? never : string) |
  (number extends string | number ? never : number) |
  (DebugType extends string | number ? never : DebugType)
type MyFunctionType = MyExclude


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>

type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>

type MyNonNullable<T> = T & {}
type HowDoesThisWork = (string | null | number | undefined) & {}