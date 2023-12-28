import { example1 } from "../day02/data"
import { exampleResult } from "./consts"
import { convertDataToGameHistory } from "./cube-conundrum-1"

describe.only("Day 2 Part 1 - Cube Conumdrum", () => {
  test("function convertDataToGameHistory()", () => {
    expect(convertDataToGameHistory(example1)).toEqual(exampleResult)
  })
})
