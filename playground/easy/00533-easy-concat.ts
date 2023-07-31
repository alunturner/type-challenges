/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #easy #array

  ### Question

  Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

  For example:

  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```

  > View on GitHub: https://tsch.js.org/533
*/

/* _____________ Your Code Here _____________ */

type Concat<T, U, Acc extends any[] = []> = T extends readonly [
  infer Ft,
  ...infer Rt,
]
  ? Concat<Rt, U, [...Acc, Ft]>
  : U extends readonly [infer Fu, ...infer Ru]
  ? Concat<T, Ru, [...Acc, Fu]>
  : Acc

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = [1] as const
type tuple = readonly [1]
type thing = Concat<tuple, tuple>

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<['1', 2, '3'], [false, boolean, '4']>,
      ['1', 2, '3', false, boolean, '4']
    >
  >,
]

// @ts-expect-error
type error = Concat<null, undefined>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/533/answer
  > View solutions: https://tsch.js.org/533/solutions
  > More Challenges: https://tsch.js.org
*/
