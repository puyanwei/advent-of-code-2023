import { data } from "./data"
import { maxNumbers } from "./consts"
import { Game, Turn } from "./types"
import { convertDataToGameHistory } from "./cube-conundrum-1"

export function cubeConundrum2() {
  const newData = convertDataToGameHistory(data)
  return calculateFewestNumberOfGames(newData, maxNumbers)
}

export function calculateFewestNumberOfGames(data: Game[], maxNumbers: Turn[]): number {
  return data.reduce((previous, current) => {
    const colors = { red: 0, green: 0, blue: 0 }

    current.cubesGrabbed.forEach((cube) => {
      maxNumbers.forEach((maxNumber) => {
        if (maxNumber.colour !== cube.colour && cube.number > colors[cube.colour]) {
          colors[cube.colour] = cube.number
        }
      })
    })

    return previous + colors.red * colors.green * colors.blue
  }, 0)
}
