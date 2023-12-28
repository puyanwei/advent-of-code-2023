import { data } from "../day02/data"
import { CubeColour, Game, Turn } from "./types"

export function cubeConundrum1() {
  return convertDataToGameHistory(data)
}

export function convertDataToGameHistory(input: string) {
  const array = input.split("\n")
  return array.map((line, index) => {
    const gameInfo = line.replace(/;/g, "").replace(/,/g, "").split(" ").slice(2)
    const turns: Turn[] = []

    for (let index = 2; index < gameInfo.length + 2; index += 2) {
      const turn = {
        number: parseInt(gameInfo[index - 2]),
        colour: gameInfo[index - 1] as CubeColour,
      }
      if (index % 2 === 0) turns.push(turn)
    }
    const game: Game = {
      gameNumber: index + 1,
      isPossible: true,
      cubesGrabbed: turns,
    }
    return game
  })
}
