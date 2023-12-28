import { example1 } from "../day02/data"
import { exampleResult, maxNumbers } from "./consts"
import { calculatePossibleGames, convertDataToGameHistory } from "./cube-conundrum-1"
import { Turn } from "./types"

describe("Day 2 Part 1 - Cube Conumdrum", () => {
  test("function convertDataToGameHistory()", () => {
    expect(convertDataToGameHistory(example1)).toEqual(exampleResult)
  })
  test("function calculatePossibleGames)", () => {
    expect(calculatePossibleGames(exampleResult, maxNumbers)).toEqual(8)
  })
})
