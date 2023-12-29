import { example1 } from "../day02/data"
import { exampleResult, maxNumbers } from "./consts"
import { calculatePossibleGames, convertDataToGameHistory } from "./cube-conundrum-1"
import { calculateFewestNumberOfGames } from "./cube-conundrum-2"
import { Turn } from "./types"

describe("Day 2 Part 1 - Cube Conumdrum", () => {
  test("convertDataToGameHistory()", () => {
    expect(convertDataToGameHistory(example1)).toEqual(exampleResult)
  })
  test("calculatePossibleGames()", () => {
    expect(calculatePossibleGames(exampleResult, maxNumbers)).toEqual(8)
  })
  test("calculateFewestNumberOfGames()", () => {
    expect(calculateFewestNumberOfGames(exampleResult, maxNumbers)).toEqual(2286)
  })
})
