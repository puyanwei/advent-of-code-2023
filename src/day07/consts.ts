import { CamelCard, Card, HandResult } from "./types"

export const cards: Card[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
] as const

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
  { hand: ["3", "2", "T", "3", "K"], bid: 765, result: "pair", firstCardOfMadeHand: "3" },
  { hand: ["T", "5", "5", "J", "5"], bid: 684, result: "trips", firstCardOfMadeHand: "5" },
  { hand: ["K", "K", "6", "7", "7"], bid: 28, result: "two pair", firstCardOfMadeHand: "K" },
  { hand: ["K", "T", "J", "J", "T"], bid: 220, result: "two pair", firstCardOfMadeHand: "J" },
  { hand: ["Q", "Q", "Q", "J", "A"], bid: 483, result: "trips", firstCardOfMadeHand: "Q" },
] as const

export const exampleTransformedSorted: CamelCard[] = [
  { hand: ["3", "2", "T", "3", "K"], bid: 765, result: "pair", firstCardOfMadeHand: "3" },
  { hand: ["K", "T", "J", "J", "T"], bid: 220, result: "two pair", firstCardOfMadeHand: "J" },
  { hand: ["K", "K", "6", "7", "7"], bid: 28, result: "two pair", firstCardOfMadeHand: "K" },
  { hand: ["T", "5", "5", "J", "5"], bid: 684, result: "trips", firstCardOfMadeHand: "5" },
  { hand: ["Q", "Q", "Q", "J", "A"], bid: 483, result: "trips", firstCardOfMadeHand: "Q" },
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
