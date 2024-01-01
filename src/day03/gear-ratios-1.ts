import { positionRemovalMap } from "./consts"
import { Edge, Gear } from "./types"

export function gearRatios1(data: string) {
  const resolvedData = data.split("").filter((element) => element !== "\n")
  const gears = getGearValues(resolvedData.join(""))
  const gearInfo = createGearInfo(resolvedData.join(""), gears)
  return gearInfo.reduce((previous, current) => {
    const isWorkingPart = hasAdjacentSymbol({
      data: resolvedData,
      columns: 10,
      rows: 10,
      gear: current,
    })
    return isWorkingPart ? (previous += parseInt(current.value)) : previous
  }, 0)
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
  rows: number
  gear: Gear
}

export function hasAdjacentSymbol({ data, columns, rows, gear }: hasAdjacentSymbolParams) {
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

  const edge = identifyEdgeOfGrid({ index: gearPosition, rows, columns })
  const resolvedAdjacentPositions =
    edge === "interior"
      ? adjacentPositions
      : removeElements(adjacentPositions, positionRemovalMap[length][edge])
  const values = resolvedAdjacentPositions.some((position) => {
    return data[position] !== "."
  })
  return values
}

type identifyEdgeOfGridParams = {
  index: number
  rows: number
  columns: number
}

export function identifyEdgeOfGrid({ index, rows, columns }: identifyEdgeOfGridParams): Edge {
  if (index - 1 > rows * columns) throw new Error(`${index} is larger then grid's largest index`)
  const topLeftCorner = index === 0
  const topRightCorner = index === columns - 1
  const bottomLeftCorner = index === (rows - 1) * columns
  const bottomRightCorner = index === rows * columns - 1
  if (topLeftCorner) return "top left corner"
  if (topRightCorner) return "top right corner"
  if (bottomLeftCorner) return "bottom left corner"
  if (bottomRightCorner) return "bottom right corner"

  if (!topLeftCorner && !topRightCorner && index < columns) return "top side"
  if (!bottomLeftCorner && !bottomRightCorner && index >= (rows - 1) * columns) return "bottom side"
  if (!topLeftCorner && !bottomLeftCorner && index % columns === 0) return "left side"
  if (!topRightCorner && !bottomRightCorner && (index + 1) % columns === 0) return "right side"
  return "interior"
}

export function removeElements(array: number[], indexes: number[]): number[] {
  indexes.sort((a, b) => b - a)

  for (let index of indexes) {
    array.splice(index, 1)
  }

  return array
}
