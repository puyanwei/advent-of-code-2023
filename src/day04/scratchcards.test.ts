import { dataResult, scratchcardInfo } from "./consts"
import { example } from "./data"
import {
  duplicateElements,
  getScore,
  getScratchcardsScore,
  resolveData,
  scratchcards1,
  splitNumberString,
} from "./scratchcards-1"
import {
  addDuplicateCount,
  bonusScratchcards,
  countScratchcards,
  addArrays,
} from "./scratchcards-2"
import { ScratchcardInfo } from "./types"

describe("Day 4 Part 1 - Scratchcards", () => {
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
  test("scratchcard1()", () => {
    expect(scratchcards1()).toEqual(27845)
  })
})

describe("Day 4 Part 2 - Scratchcards", () => {
  test("addDuplicateCount()", () => {
    expect(addDuplicateCount(dataResult)).toEqual(scratchcardInfo)
  })

  test("bonusScratchcards()", () => {
    expect(bonusScratchcards(2)).toEqual([1, 1])
    expect(bonusScratchcards(6)).toEqual([1, 1, 1, 1, 1, 1])
    expect(bonusScratchcards(3)).toEqual([1, 1, 1])
  })

  test.only("addArrays", () => {
    expect(addArrays([1, 2, 3, 4], [5, 6, 7])).toEqual([1, 7, 9, 11])
    expect(addArrays([1, 1], [3, 2])).toEqual([1, 4, 2])
    // expect(addArrays([], [3, 2])).toEqual([3, 2])
    // expect(addArrays([3, 3], [])).toEqual([3, 3])
  })

  describe("countScratchcards()", () => {
    test("One ticket", () => {
      {
        const scratchcardInfo: ScratchcardInfo[] = [
          {
            winningNumbers: [41, 48, 83, 86, 17],
            playerNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
            duplicates: 4,
          },
        ]
        expect(countScratchcards(scratchcardInfo)).toEqual(1)
      }
    })
    test("Two tickets", () => {
      const scratchcardInfo: ScratchcardInfo[] = [
        {
          winningNumbers: [41, 48, 83, 86, 17],
          playerNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
          duplicates: 4,
        },
        {
          winningNumbers: [13, 32, 20, 16, 61],
          playerNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
          duplicates: 2,
        },
      ]
      expect(countScratchcards(scratchcardInfo)).toEqual(3)
    })
    test("Three tickets", () => {
      const scratchcardInfo: ScratchcardInfo[] = [
        {
          winningNumbers: [41, 48, 83, 86, 17],
          playerNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
          duplicates: 4,
        },
        {
          winningNumbers: [13, 32, 20, 16, 61],
          playerNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
          duplicates: 2,
        },
        {
          winningNumbers: [1, 21, 53, 59, 44],
          playerNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
          duplicates: 2,
        },
      ]
      expect(countScratchcards(scratchcardInfo)).toEqual(7)
    })
    test("Four tickets", () => {
      const scratchcardInfo: ScratchcardInfo[] = [
        {
          winningNumbers: [41, 48, 83, 86, 17],
          playerNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
          duplicates: 4,
        },
        {
          winningNumbers: [13, 32, 20, 16, 61],
          playerNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
          duplicates: 2,
        },
        {
          winningNumbers: [1, 21, 53, 59, 44],
          playerNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
          duplicates: 2,
        },
        {
          winningNumbers: [1, 21, 53, 59, 44],
          playerNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
          duplicates: 2,
        },
      ]
      expect(countScratchcards(scratchcardInfo)).toEqual(2)
    })
    // {
    //   const scratchcardInfo: ScratchcardInfo[] = [
    //     {
    //       winningNumbers: [41, 48, 83, 86, 17],
    //       playerNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
    //       duplicates: 4,
    //     },
    //     {
    //       winningNumbers: [13, 32, 20, 16, 61],
    //       playerNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
    //       duplicates: 2,
    //     },
    //     {
    //       winningNumbers: [1, 21, 53, 59, 44],
    //       playerNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
    //       duplicates: 2,
    //     },
    //     {
    //       winningNumbers: [1, 21, 53, 59, 44],
    //       playerNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
    //       duplicates: 2,
    //     },
    //     {
    //       winningNumbers: [41, 92, 73, 84, 69],
    //       playerNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
    //       duplicates: 1,
    //     },
    //     {
    //       winningNumbers: [87, 83, 26, 28, 32],
    //       playerNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
    //       duplicates: 0,
    //     },
    //     {
    //       winningNumbers: [31, 18, 13, 56, 72],
    //       playerNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
    //       duplicates: 0,
    //     },
    //   ]

    //   expect(countScratchcards(scratchcardInfo)).toEqual(30)
    // }
  })
})
