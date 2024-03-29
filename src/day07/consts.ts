export const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

export const cardMap: Record<string, number> = {
  A: 14,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
} as const

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
