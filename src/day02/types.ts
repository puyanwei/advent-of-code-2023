export type GameHistory = Game[]

export type Game = {
  gameNumber: number
  isPossible: boolean
  cubesGrabbed: Turn[]
}

export type Turn = {
  colour: CubeColour
  number: number
}

export type CubeColour = "blue" | "red" | "green"
