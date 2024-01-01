import { gearsInfo } from "./consts"
import { example } from "./data"
import {
  createGearInfo,
  getGearValues,
  hasAdjacentSymbol,
  identifyEdgeOfGrid,
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
    expect(hasAdjacentSymbol({ data, columns: 10, gear: gear1 })).toBe(true)
    expect(hasAdjacentSymbol({ data, columns: 10, gear: gear5 })).toBe(false)
    expect(hasAdjacentSymbol({ data, columns: 10, gear: gear3 })).toEqual(true)
    expect(hasAdjacentSymbol({ data, columns: 10, gear: gear4 })).toEqual(true)
  })
  test.only("identifyEdgeOfGrid()", () => {
    expect(identifyEdgeOfGrid({ index: 0, rows: 10, columns: 10 })).toEqual("Top Left Corner")
    expect(identifyEdgeOfGrid({ index: 90, rows: 10, columns: 10 })).toEqual("Bottom Left Corner")
    expect(identifyEdgeOfGrid({ index: 99, rows: 10, columns: 10 })).toEqual("Bottom Right Corner")
    expect(identifyEdgeOfGrid({ index: 9, rows: 10, columns: 10 })).toEqual("Top Right Corner")
    expect(identifyEdgeOfGrid({ index: 5, rows: 10, columns: 10 })).toEqual("Top Side")
    expect(identifyEdgeOfGrid({ index: 94, rows: 10, columns: 10 })).toEqual("Bottom Side")
    expect(identifyEdgeOfGrid({ index: 60, rows: 10, columns: 10 })).toEqual("Left Side")
    expect(identifyEdgeOfGrid({ index: 39, rows: 10, columns: 10 })).toEqual("Right Side")
    expect(identifyEdgeOfGrid({ index: 15, rows: 10, columns: 10 })).toEqual("Interior")
    expect(identifyEdgeOfGrid({ index: 15, rows: 10, columns: 10 })).toEqual("Interior")
    expect(identifyEdgeOfGrid({ index: 45, rows: 10, columns: 10 })).toEqual("Interior")

    try {
      identifyEdgeOfGrid({ index: 101, rows: 10, columns: 10 })
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty("message", "Index is larger then grid's largest index")
    }
  })
})
