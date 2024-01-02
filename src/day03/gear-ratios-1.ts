import { positionRemovalMap } from "./consts"
import { data } from "./data"
import { Edge, Gear } from "./types"

export function gearRatios1() {
  const { rows, columns } = getRowsAndColumns(data)
  return sumParts(data, rows, columns)
}

export function sumParts(data: string, columns = 10, rows = 10) {
  const gears = getGearValues(data)
  const gearInfo = createGearInfo(data, gears)

  return gearInfo.reduce((previous, current) => {
    const isWorkingPart = hasAdjacentSymbol({
      data: data.split(""),
      columns: columns,
      rows,
      gear: current,
    })
    return isWorkingPart ? (previous += parseInt(current.value)) : previous
  }, 0)
}

export function getGearValues(text: string) {
  return text.split(/(\d+)/).filter((element) => parseInt(element))
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
  const adjacentPositions = getAdjacentPositions(gearPosition, columns, length, value)
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
  if (index > rows - 1 + rows * columns)
    // The rows - 1 is due to the /n character being included in the index position
    throw new Error(`${index} is larger then grid's largest index`)
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

export function getRowsAndColumns(text: string) {
  const rows = text.split("\n")
  const columns = rows[0].length
  return { rows: rows.length, columns }
}

function getAdjacentPositions(
  gearPosition: number,
  columns: number,
  length: number,
  value: string
): number[] {
  // 1 length number (should be 8 positions, starting from diagonally top left clockwise)
  const adjacentPositionsOneDigits = [
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
  let adjacentPositions: number[] = []
  if (length === 1) adjacentPositions = adjacentPositionsOneDigits
  if (length === 2) adjacentPositions = adjacentPositionsTwoDigits
  if (length === 3) adjacentPositions = adjacentPositionsThreeDigits
  if (length < 0 || length > 3)
    throw new Error(`Incompatible gear part length of ${length} in ${value}`)
  return adjacentPositions
}
