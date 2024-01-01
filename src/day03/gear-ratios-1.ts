import { data } from "./data"
import { Gear } from "./types"

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
  // 2 length number (should be 10 positions, starting from diagonally top left)
  // console.log(gear, data[gearPosition], data[gearPosition + 1], gearPosition)
  const adjacentPositions = [
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

  const values = adjacentPositions.map((position) => data[position])
  console.log({ values })
  // 3 length number
  return values
}
