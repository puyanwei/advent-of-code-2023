import { CamelCard, HandResult } from "./types"

export const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

export const cardMap: Record<string, number> = {
  A: 14,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
} as const

export const stengthOrder: HandResult[] = [
  "quintuple",
  "quads",
  "full house",
  "trips",
  "two pair",
  "pair",
  "single",
] as const

export const exampleTransformed: CamelCard[] = [
  { hand: ["3", "2", "T", "3", "K"], bid: 765, result: "pair" },
  { hand: ["T", "5", "5", "J", "5"], bid: 684, result: "trips" },
  { hand: ["K", "K", "6", "7", "7"], bid: 28, result: "two pair" },
  { hand: ["K", "T", "J", "J", "T"], bid: 220, result: "two pair" },
  { hand: ["Q", "Q", "Q", "J", "A"], bid: 483, result: "trips" },
] as const

export const exampleTransformedSorted: CamelCard[] = [
  { hand: ["T", "5", "5", "J", "5"], bid: 684, result: "trips" },
  { hand: ["Q", "Q", "Q", "J", "A"], bid: 483, result: "trips" },
  { hand: ["K", "K", "6", "7", "7"], bid: 28, result: "two pair" },
  { hand: ["K", "T", "J", "J", "T"], bid: 220, result: "two pair" },
  { hand: ["3", "2", "T", "3", "K"], bid: 765, result: "pair" },
] as const

/* Scoring
Single card 2 to A is 2 to 14
Pair is 100
2 Pair is 200
3 of a kind is 1000
Full house is 3 of a kind points + pair points
Quads is 10,000

All single cards added up initially
Then pairs & above added too for total
*/
