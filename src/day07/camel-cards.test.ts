import {
  calculateHandResult,
  camelCards,
  getFirstCardOfMadeHand,
  orderByStrength,
} from "./camel-cards"
import { cards, exampleTransformed, exampleTransformedSorted, stengthOrder } from "./consts"
import { example } from "./data"

describe("Day 7 Part 1 - Camel Cards", () => {
  test("function calculateHandResult()", () => {
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
  test("function orderByStrength()", () => {
    expect(orderByStrength(exampleTransformed, stengthOrder, cards)).toEqual(
      exampleTransformedSorted
    )
  })
  test("function getFirstCardOfMadeHand()", () => {
    expect(getFirstCardOfMadeHand(["3", "2", "T", "3", "K"], cards)).toEqual("3")
    expect(getFirstCardOfMadeHand(["T", "5", "5", "J", "5"], cards)).toEqual("5")
    expect(getFirstCardOfMadeHand(["K", "K", "6", "7", "7"], cards)).toEqual("K")
    expect(getFirstCardOfMadeHand(["K", "T", "J", "J", "T"], cards)).toEqual("J")
    expect(getFirstCardOfMadeHand(["Q", "Q", "Q", "J", "A"], cards)).toEqual("Q")
  })

  test("function camelCards()", () => {
    expect(camelCards(example)).toEqual(6440)
  })
})
