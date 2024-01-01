export type Gear = {
  index: number
  value: string
  length: number
}

export type Edge =
  | "top left corner"
  | "top right corner"
  | "bottom left corner"
  | "bottom right corner"
  | "left side"
  | "right side"
  | "top side"
  | "bottom side"
  | "interior"

export type PositionRemovalMap = Record<number, PositionRemoval>
type PositionRemoval = Record<Edge, number[]>
