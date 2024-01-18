import { dataResult } from "./consts"
import { example } from "./data"
import { resolveData, splitNumberString } from "./scratchcards-1"

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
})
