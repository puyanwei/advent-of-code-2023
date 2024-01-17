import { example } from "./data"
import { resolveData } from "./scratchcards-1"

describe.only("Day 4 Part 1 - Scratchcards", () => {
  test("resolveData()", () => {
    expect(resolveData(example)).toEqual({})
  })
})
