import { data } from "./data"
import { Gear } from "./types"

export function gearRatios1() {
  const gears = getGearValues(data)
}

export function getGearValues(data: string) {
  return data.split(/(\d+)/).filter((element) => parseInt(element))
}

export function getGearInfo(data: string, gears: string[]): Gear[] {
  return gears.map((gear) => {
    const index = data.indexOf(gear)
    return {
      index,
      value: gear,
      length: gear.length,
      isValid: false,
    }
  })
}
