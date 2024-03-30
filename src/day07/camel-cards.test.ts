import { calculateHandResult, camelCards, getCardsOfMadeHand, orderByStrength } from "./camel-cards"
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
  test("function getCardsOfMadeHand()", () => {
    expect(getCardsOfMadeHand(["3", "2", "T", "3", "K"])).toEqual(["3"])
    expect(getCardsOfMadeHand(["T", "5", "5", "J", "5"])).toEqual(["5"])
    expect(getCardsOfMadeHand(["K", "K", "6", "7", "7"])).toEqual(["K", "7"])
    expect(getCardsOfMadeHand(["K", "T", "J", "J", "T"])).toEqual(["J", "T"])
    expect(getCardsOfMadeHand(["Q", "Q", "Q", "J", "A"])).toEqual(["Q"])
    expect(getCardsOfMadeHand(["Q", "Q", "Q", "J", "J"])).toEqual(["Q", "J"])
  })

  test("function camelCards()", () => {
    expect(camelCards(example)).toEqual(6440)
  })
})
