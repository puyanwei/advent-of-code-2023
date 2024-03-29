import { calculateCombinationPoints, calculateSingleCardPoints } from "./camel-cards"

describe.only("Day 7 Part 1 - Camel Cards", () => {
  test("function calculateSingleCardPoints()", () => {
    expect(calculateSingleCardPoints(["3", "2", "T", "3", "K"])).toEqual(31)
    expect(calculateSingleCardPoints(["T", "5", "5", "J", "5"])).toEqual(36)
    expect(calculateSingleCardPoints(["K", "K", "6", "7", "7"])).toEqual(46)
    expect(calculateSingleCardPoints(["K", "T", "J", "J", "T"])).toEqual(55)
    expect(calculateSingleCardPoints(["Q", "Q", "Q", "J", "A"])).toEqual(61)
  })
  test.only("function calculateCombinationPoints()", () => {
    expect(calculateCombinationPoints(["3", "2", "T", "3", "K"])).toEqual(100)
    expect(calculateCombinationPoints(["T", "5", "5", "J", "5"])).toEqual(1000)
    expect(calculateCombinationPoints(["K", "K", "6", "7", "7"])).toEqual(200)
    expect(calculateCombinationPoints(["K", "T", "J", "J", "T"])).toEqual(200)
    expect(calculateCombinationPoints(["Q", "Q", "Q", "J", "A"])).toEqual(1000)
    expect(calculateCombinationPoints(["Q", "Q", "Q", "J", "J"])).toEqual(1100)
    expect(calculateCombinationPoints(["Q", "Q", "Q", "Q", "J"])).toEqual(10000)
    expect(calculateCombinationPoints(["Q", "Q", "Q", "Q", "Q"])).toEqual(100000)
  })
})
