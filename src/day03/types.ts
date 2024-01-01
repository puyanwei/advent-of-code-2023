export type Gear = {
  index: number
  value: string
  length: number
}

export type Edges =
  | "Top Left Corner"
  | "Top Right Corner"
  | "Bottom Left Corner"
  | "Bottom Right Corner"
  | "Left Side"
  | "Right Side"
  | "Top Side"
  | "Bottom Side"
  | "Interior"
