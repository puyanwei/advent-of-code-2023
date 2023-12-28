import { data } from "../day02/data"
import { maxNumbers } from "./consts"
import { CubeColour, Game, Turn } from "./types"

export function cubeConundrum1() {
  const newData = convertDataToGameHistory(data)
  return calculatePossibleGames(newData, maxNumbers)
}

export function convertDataToGameHistory(input: string): Game[] {
  const array = input.split("\n")
  return array.map((line, index) => {
    const gameInfo = line.replace(/;/g, "").replace(/,/g, "").split(" ").slice(2)
    const turns: Turn[] = []

    for (let index = 2; index < gameInfo.length + 2; index += 2) {
      const turn: Turn = {
        number: parseInt(gameInfo[index - 2]),
        colour: gameInfo[index - 1] as CubeColour,
      }
      if (index % 2 === 0) turns.push(turn)
    }
    const game: Game = {
      gameNumber: index + 1,
      cubesGrabbed: turns,
    }
    return game
  })
}

export function calculatePossibleGames(data: Game[], maxNumbers: Turn[]) {
  return data.reduce((previous, current) => {
    const cubeComparisons = current.cubesGrabbed.map((cube) =>
      maxNumbers.map((maxNumber) => {
        if (maxNumber.colour !== cube.colour) return "Void"
        if (maxNumber.number < cube.number) return "Impossible"
        return "Possible"
      })
    )
    return cubeComparisons.flat(1).includes("Impossible")
      ? previous
      : (current.gameNumber += previous)
  }, 0)
}
