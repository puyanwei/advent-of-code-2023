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
    let red = 0
    let green = 0
    let blue = 0

    current.cubesGrabbed.forEach((cube) =>
      maxNumbers.forEach((maxNumber) => {
        if (maxNumber.colour !== cube.colour) {
          if (cube.colour === "red" && cube.number > red) {
            red = cube.number
          }
          if (cube.colour === "green" && cube.number > green) {
            green = cube.number
          }
          if (cube.colour === "blue" && cube.number > blue) {
            blue = cube.number
          }
        }
        return
      })
    )
    return (previous += red * green * blue)
  }, 0)
}
