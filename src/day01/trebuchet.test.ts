import { example } from "./data"
import { calculateCode, sumDigits, trebuchet, twoDigitCreator } from "./trebuchet-1"

describe("Day 1 Part 1 - Trebuchet", () => {
  const [line1, line2, line3, line4] = example.split("\n")
  test("twoDigitCreator function", () => {
    expect(twoDigitCreator(line1)).toEqual(12)
    expect(twoDigitCreator(line2)).toEqual(38)
    expect(twoDigitCreator(line3)).toEqual(15)
    expect(twoDigitCreator(line4)).toEqual(77)
  })
  test("sumDigits function", () => {
    expect(sumDigits([1, 2, 3])).toEqual(6)
  })
  test("Initial example", () => {
    expect(calculateCode(example)).toEqual(142)
  })
})

// test("Question", () => {
// expect(trebuchet()).toEqual()
// })
