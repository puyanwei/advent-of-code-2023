export type Scratchcard = {
  winningNumbers: number[]
  playerNumbers: number[]
}

export type ScratchcardInfo = Scratchcard & {
  duplicates: number
}
