import { data } from "./data"
import { Edges, Gear } from "./types"

export function gearRatios1() {
  const gears = getGearValues(data)
  const gearInfo = createGearInfo(data, gears)
}

export function getGearValues(data: string) {
  return data.split(/(\d+)/).filter((element) => parseInt(element))
}

export function createGearInfo(data: string, gears: string[]): Gear[] {
  return gears.map((gear) => {
    const index = data.indexOf(gear)
    return {
      index,
      value: gear,
      length: gear.length,
    }
  })
}

type hasAdjacentSymbolParams = {
  data: string[]
  columns: number
  gear: Gear
}

export function hasAdjacentSymbol({ data, columns, gear }: hasAdjacentSymbolParams) {
  const { index: gearPosition, length, value } = gear
  // 2 length number (should be 10 positions, starting from diagonally top left clockwise)

  const adjacentPositionsTwoDigits = [
    gearPosition - columns - 2,
    gearPosition - columns - 1,
    gearPosition - columns,
    gearPosition - columns + 1,
    gearPosition + 2,
    gearPosition + columns + 3,
    gearPosition + columns + 2,
    gearPosition + columns + 1,
    gearPosition + columns,
    gearPosition - 1,
  ]
  // 3 length number (should be 12 positions, starting from diagonally top left clockwise)
  const adjacentPositionsThreeDigits = [
    gearPosition - columns - 2,
    gearPosition - columns - 1,
    gearPosition - columns,
    gearPosition - columns + 1,
    gearPosition - columns + 2,
    gearPosition + 3,
    gearPosition + columns + 4,
    gearPosition + columns + 3,
    gearPosition + columns + 2,
    gearPosition + columns + 1,
    gearPosition + columns,
    gearPosition - 1,
  ]

  const adjacentPositions = length === 2 ? adjacentPositionsTwoDigits : adjacentPositionsThreeDigits
  const values = adjacentPositions.some((position) => data[position] !== ".")
  return values
}

type identifyEdgeOfGridParams = {
  index: number
  rows: number
  columns: number
}

export function identifyEdgeOfGrid({ index, rows, columns }: identifyEdgeOfGridParams): Edges {
  if (index > rows * columns) throw new Error("Index is larger then grid's largest index")
  const topLeftCorner = index === 0
  const topRightCorner = index === columns - 1
  const bottomLeftCorner = index === (rows - 1) * columns
  const bottomRightCorner = index === rows * columns - 1
  if (topLeftCorner) return "Top Left Corner"
  if (topRightCorner) return "Top Right Corner"
  if (bottomLeftCorner) return "Bottom Left Corner"
  if (bottomRightCorner) return "Bottom Right Corner"

  if (!topLeftCorner && !topRightCorner && index < columns) return "Top Side"
  if (!bottomLeftCorner && !bottomRightCorner && index >= (rows - 1) * columns) return "Bottom Side"
  if (!topLeftCorner && !bottomLeftCorner && index % columns === 0) return "Left Side"
  if (!topRightCorner && !bottomRightCorner && (index + 1) % columns === 0) return "Right Side"
  return "Interior"
}
