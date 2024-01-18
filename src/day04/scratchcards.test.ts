import { dataResult } from "./consts"
import { example } from "./data"
import {
  duplicateElements,
  getScore,
  getScratchcardsScore,
  resolveData,
  scratchcards1,
  splitNumberString,
} from "./scratchcards-1"

describe.only("Day 4 Part 1 - Scratchcards", () => {
  test("resolveData()", () => {
    expect(resolveData(example)).toEqual(dataResult)
  })

  test("splitNumberString", () => {
    const result = [41, 48, 83, 86, 17]
    const numberString1 = `41 48 83 86 17`
    expect(splitNumberString(numberString1)).toEqual(result)
    const numberString2 = ` 41 48 83 86 17 `
    expect(splitNumberString(numberString2)).toEqual(result)
    const numberString3 = `69 82 63 72 16 21 14  1`
    expect(splitNumberString(numberString3)).toEqual([69, 82, 63, 72, 16, 21, 14, 1])
  })

  test("duplicateElements()", () => {
    expect(duplicateElements([1, 2, 3], [1, 2, 3])).toEqual(3)
    expect(duplicateElements([1, 2, 3], [2, 3])).toEqual(2)
    expect(duplicateElements([1, 2, 3], [4, 5])).toEqual(0)
    expect(duplicateElements([1, 2, 3], [])).toEqual(0)
    expect(duplicateElements([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])).toEqual(4)
    expect(duplicateElements([83, 86, 6, 31, 17, 9, 48, 53], [41, 48, 83, 86, 17])).toEqual(4)
  })

  test("getScore()", () => {
    expect(getScore(dataResult)).toEqual(13)
  })

  test("getScratchcardsScore()", () => {
    expect(getScratchcardsScore(example)).toEqual(13)
  })
})
