export type Card = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K"

export type CamelCard = {
  hand: Card[]
  bid: number
  score: number
}
