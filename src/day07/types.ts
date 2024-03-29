export type Card = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K"

export type HandResult =
  | "single"
  | "pair"
  | "two pair"
  | "trips"
  | "full house"
  | "quads"
  | "quintuple"

export type CamelCard = {
  hand: Card[]
  bid: number
  result: HandResult
}
