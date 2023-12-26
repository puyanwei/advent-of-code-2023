import { data, example1, example2 } from "./data"
import { calculateCalibrationValues, sumDigits, twoDigitCreator } from "./trebuchet-1"
import { convertWordNumberToNumber } from "./trebuchet-2"

describe("Day 1 Part 1 - Trebuchet", () => {
  const [line1, line2, line3, line4] = example1.split("\n")
  test("twoDigitCreator function", () => {
    expect(twoDigitCreator(line1)).toEqual(12)
    expect(twoDigitCreator(line2)).toEqual(38)
    expect(twoDigitCreator(line3)).toEqual(15)
    expect(twoDigitCreator(line4)).toEqual(77)
    try {
      const result = twoDigitCreator("lhklkhlsahfklaf")
      expect(result).toBe(12)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty("message", "No first digit found")
    }
  })

  test("sumDigits function", () => {
    expect(sumDigits([1, 2, 3])).toEqual(6)
  })
  test("Initial example", () => {
    expect(calculateCalibrationValues(example1)).toEqual(142)
  })
  test("Question", () => {
    expect(calculateCalibrationValues(data)).toEqual(54573)
  })
})

describe("Day 1 Part 2 - Trebuchet", () => {
  const [line1, line2, line3, line4, line5, line6, line7] = example2.split("\n")
  test("convertWordNumberToNumber function", () => {
    expect(convertWordNumberToNumber(line1)).toEqual("219")
    expect(convertWordNumberToNumber(line2)).toEqual("8wo3")
    expect(convertWordNumberToNumber(line3)).toEqual("abc123xyz")
    expect(convertWordNumberToNumber(line4)).toEqual("x2ne34")
    expect(convertWordNumberToNumber(line5)).toEqual("49eight72")
    expect(convertWordNumberToNumber(line6)).toEqual("z1ight234")
    expect(convertWordNumberToNumber(line7)).toEqual("7pqrst6teen")
  })
})
