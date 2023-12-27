import { numbersToNumberWordsMap } from "./consts"
import { data, example1, example2 } from "./data"
import { calculateCalibrationValues, sumDigits, twoDigitCreator } from "./trebuchet-1"
import { convertWordNumbersToNumber, reverseLineAndMap, reverseString } from "./trebuchet-2"

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
  test("convertWordNumbersToNumber function", () => {
    {
      const line1FirstWordNumberConversion = convertWordNumbersToNumber(
        line1,
        numbersToNumberWordsMap
      )
      expect(line1FirstWordNumberConversion).toEqual("21nine")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        line1FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("219")
    }

    {
      const line2FirstWordNumberConversion = convertWordNumbersToNumber(
        line2,
        numbersToNumberWordsMap
      )
      expect(line2FirstWordNumberConversion).toEqual("8wothree")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        line2FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("8wo3")
    }

    {
      const line3FirstWordNumberConversion = convertWordNumbersToNumber(
        line3,
        numbersToNumberWordsMap
      )
      expect(line3FirstWordNumberConversion).toEqual("abc12threexyz")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        line3FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("abc123xyz")
    }

    {
      const line4FirstWordNumberConversion = convertWordNumbersToNumber(
        line4,
        numbersToNumberWordsMap
      )
      expect(line4FirstWordNumberConversion).toEqual("x2ne3four")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        line4FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("x2ne34")
    }

    {
      const line5FirstWordNumberConversion = convertWordNumbersToNumber(
        line5,
        numbersToNumberWordsMap
      )
      expect(line5FirstWordNumberConversion).toEqual("49eightseven2")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        line5FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("49eight72")
    }

    {
      const line6FirstWordNumberConversion = convertWordNumbersToNumber(
        line6,
        numbersToNumberWordsMap
      )
      expect(line6FirstWordNumberConversion).toEqual("z1ight234")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        line6FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("z1ight234")
    }

    {
      const line7FirstWordNumberConversion = convertWordNumbersToNumber(
        line7,
        numbersToNumberWordsMap
      )
      expect(line7FirstWordNumberConversion).toEqual("7pqrst6teen")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        line7FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("7pqrst6teen")
    }

    {
      const data1FirstWordNumberConversion = convertWordNumbersToNumber(
        "eightthree8fiveqjgsdzgnnineeight",
        numbersToNumberWordsMap
      )
      expect(data1FirstWordNumberConversion).toEqual("8three8fiveqjgsdzgnnineeight")

      const { reversedLine, reversedMap } = reverseLineAndMap(
        data1FirstWordNumberConversion,
        numbersToNumberWordsMap
      )
      const finalConversion = reverseString(convertWordNumbersToNumber(reversedLine, reversedMap))
      expect(finalConversion).toEqual("8three8fiveqjgsdzgnnine8")
    }
  })
})
