import { calculateHandResult, calculateSingleCardPoints, orderByStrength } from "./camel-cards"
import { exampleTransformed, exampleTransformedSorted, stengthOrder } from "./consts"
import { example } from "./data"

describe.only("Day 7 Part 1 - Camel Cards", () => {
  // test("function calculateSingleCardPoints()", () => {
  //   expect(calculateSingleCardPoints(["3", "2", "T", "3", "K"])).toEqual(31)
  //   expect(calculateSingleCardPoints(["T", "5", "5", "J", "5"])).toEqual(36)
  //   expect(calculateSingleCardPoints(["K", "K", "6", "7", "7"])).toEqual(46)
  //   expect(calculateSingleCardPoints(["K", "T", "J", "J", "T"])).toEqual(55)
  //   expect(calculateSingleCardPoints(["Q", "Q", "Q", "J", "A"])).toEqual(61)
  // })
  test.only("function calculateHandResult()", () => {
    expect(calculateHandResult(["A", "2", "T", "3", "K"])).toEqual("single")
    expect(calculateHandResult(["A", "2", "T", "T", "K"])).toEqual("pair")
    expect(calculateHandResult(["T", "5", "5", "J", "5"])).toEqual("trips")
    expect(calculateHandResult(["K", "K", "6", "7", "7"])).toEqual("two pair")
    expect(calculateHandResult(["K", "T", "J", "J", "T"])).toEqual("two pair")
    expect(calculateHandResult(["Q", "Q", "Q", "J", "A"])).toEqual("trips")
    expect(calculateHandResult(["Q", "Q", "Q", "J", "J"])).toEqual("full house")
    expect(calculateHandResult(["Q", "Q", "Q", "Q", "J"])).toEqual("quads")
    expect(calculateHandResult(["Q", "Q", "Q", "Q", "Q"])).toEqual("quintuple")
  })
  test.only("function orderByStrength()", () => {
    expect(orderByStrength(exampleTransformed, stengthOrder)).toEqual(exampleTransformedSorted)
  })
})
