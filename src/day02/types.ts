export type GameHistory = Game[]

export type Game = {
  gameNumber: number
  cubesGrabbed: Turn[]
}

export type Turn = {
  colour: CubeColour
  number: number
}

export type CubeColour = "blue" | "red" | "green"
