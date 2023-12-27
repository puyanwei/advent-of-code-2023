import { numbersToNumberWordsMap } from "./consts"

export type NumberWords =
  | "one"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine"

export type WordNumberInfo = {
  wordNumber: string | ""
  charIndex: number
}
