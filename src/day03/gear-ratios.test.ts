import { dataResult, example2Result, gearsInfo } from "./consts"
import { data, example, example2 } from "./data"
import {
  createGearInfo,
  gearRatios1,
  getGearValues,
  getRowsAndColumns,
  hasAdjacentSymbol,
  identifyEdgeOfGrid,
  removeElements,
  sumParts,
} from "./gear-ratios-1"

describe.only("Day 3 Part 1 - Gear Ratios", () => {
  test("getGearValues()", () => {
    expect(getGearValues(example)).toEqual([
      "467",
      "114",
      "35",
      "633",
      "617",
      "58",
      "592",
      "755",
      "664",
      "598",
    ])

    console.log(example.length, 11111)
    expect(getGearValues(example2)).toEqual(example2Result)
    expect(getGearValues(data)).toEqual(dataResult)
  })

  test("getGearsInfo()", () => {
    const gearValues = ["467", "114", "35", "633", "617", "58", "592", "755", "664", "598"]
    expect(createGearInfo(example, gearValues)).toEqual(gearsInfo)
  })

  test("hasAdjacentSymbol", () => {
    const data = example.split("")
    const gear1 = gearsInfo[0]
    const gear3 = gearsInfo[2]
    const gear4 = gearsInfo[3]
    const gear5 = gearsInfo[5]
    expect(hasAdjacentSymbol({ data, columns: 10, rows: 10, gear: gear1 })).toBe(true)
    expect(hasAdjacentSymbol({ data, columns: 10, rows: 10, gear: gear5 })).toBe(false)
    expect(hasAdjacentSymbol({ data, columns: 10, rows: 10, gear: gear3 })).toEqual(true)
    expect(hasAdjacentSymbol({ data, columns: 10, rows: 10, gear: gear4 })).toEqual(true)
    const singleDigitGearInfo = { index: 13, value: "5", length: 1 }
    expect(hasAdjacentSymbol({ data, columns: 10, rows: 10, gear: singleDigitGearInfo })).toEqual(
      true
    )
  })
  test("identifyEdgeOfGrid()", () => {
    expect(identifyEdgeOfGrid({ index: 0, rows: 10, columns: 10 })).toEqual("top left corner")
    expect(identifyEdgeOfGrid({ index: 90, rows: 10, columns: 10 })).toEqual("bottom left corner")
    expect(identifyEdgeOfGrid({ index: 99, rows: 10, columns: 10 })).toEqual("bottom right corner")
    expect(identifyEdgeOfGrid({ index: 9, rows: 10, columns: 10 })).toEqual("top right corner")
    expect(identifyEdgeOfGrid({ index: 5, rows: 10, columns: 10 })).toEqual("top side")
    expect(identifyEdgeOfGrid({ index: 94, rows: 10, columns: 10 })).toEqual("bottom side")
    expect(identifyEdgeOfGrid({ index: 60, rows: 10, columns: 10 })).toEqual("left side")
    expect(identifyEdgeOfGrid({ index: 39, rows: 10, columns: 10 })).toEqual("right side")
    expect(identifyEdgeOfGrid({ index: 15, rows: 10, columns: 10 })).toEqual("interior")
    expect(identifyEdgeOfGrid({ index: 15, rows: 10, columns: 10 })).toEqual("interior")
    expect(identifyEdgeOfGrid({ index: 45, rows: 10, columns: 10 })).toEqual("interior")

    try {
      identifyEdgeOfGrid({ index: 101, rows: 10, columns: 10 })
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty("message", "Index is larger then grid's largest index")
    }
  })
  test("getRowsAndColumns()", () => {
    expect(getRowsAndColumns(example)).toEqual({ rows: 10, columns: 10 })
  })
  test("removeElements()", () => {
    expect(removeElements([1, 2, 3], [1, 2])).toEqual([1])
    expect(removeElements([1, 2, 3], [2])).toEqual([1, 2])
    expect(removeElements([1, 2, 3, 2, 9, 9], [2, 0, 4])).toEqual([2, 2, 9])
  })
  test("sumParts()", () => {
    expect(sumParts(example)).toEqual(4361)
  })
  test("gearRatios1()", () => {
    expect(gearRatios1()).toEqual(537732)
  })
})
