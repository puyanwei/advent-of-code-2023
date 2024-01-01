import { gearsInfo } from "./consts"
import { example } from "./data"
import { createGearInfo, getGearValues, hasAdjacentSymbol } from "./gear-ratios-1"

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

  test.only("hasAdjacentSymbol", () => {
    const gear1 = gearsInfo[0]
    const gear2 = gearsInfo[1]
    const gear3 = gearsInfo[2]
    const gear5 = gearsInfo[5]
    expect(hasAdjacentSymbol({ data: example.split(""), columns: 10, gear: gear3 })).toEqual([
      ".",
      ".",
      "*",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
    ])
    // expect(hasAdjacentSymbol(example, gear2)).toBe(false)
    // expect(hasAdjacentSymbol(example, gear3)).toBe(true)
    // expect(hasAdjacentSymbol(example, gear5)).toBe(false)
  })
})
