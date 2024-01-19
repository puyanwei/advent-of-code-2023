import { Scratchcard, ScratchcardInfo } from "./types"

export const dataResult: Scratchcard[] = [
  {
    winningNumbers: [41, 48, 83, 86, 17],
    playerNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
  },
  {
    winningNumbers: [13, 32, 20, 16, 61],
    playerNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
  },
  {
    winningNumbers: [1, 21, 53, 59, 44],
    playerNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
  },
  {
    winningNumbers: [41, 92, 73, 84, 69],
    playerNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
  },
  {
    winningNumbers: [87, 83, 26, 28, 32],
    playerNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
  },
  {
    winningNumbers: [31, 18, 13, 56, 72],
    playerNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
  },
] as const

export const scratchcardInfo: ScratchcardInfo[] = [
  {
    winningNumbers: [41, 48, 83, 86, 17],
    playerNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
    duplicates: 4,
  },
  {
    winningNumbers: [13, 32, 20, 16, 61],
    playerNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
    duplicates: 2,
  },
  {
    winningNumbers: [1, 21, 53, 59, 44],
    playerNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
    duplicates: 2,
  },
  {
    winningNumbers: [41, 92, 73, 84, 69],
    playerNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
    duplicates: 1,
  },
  {
    winningNumbers: [87, 83, 26, 28, 32],
    playerNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
    duplicates: 0,
  },
  {
    winningNumbers: [31, 18, 13, 56, 72],
    playerNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
    duplicates: 0,
  },
] as const
