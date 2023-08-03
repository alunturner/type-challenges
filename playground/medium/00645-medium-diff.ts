/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object

  ### Question

  Get an `Object` that is the difference between `O` & `O1`

  > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Your Code Here _____________ */

// with objects '&' gives you all of the keys, '|' gives you the common keys
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

// without Omit
// type Diff<O, O1> = {
//   [key in keyof (O & O1) as key extends keyof (O | O1) ? never : key]: (O & O1)[key]
// }

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type thing = keyof (Foo | Bar)
type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
