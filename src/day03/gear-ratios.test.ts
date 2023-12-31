import { example } from "./data"
import { getGearInfo, getGearValues } from "./gear-ratios-1"

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
    const result = getGearInfo(example, gearValues)
    console.log({ result })
    expect(getGearInfo(example, gearValues)).toEqual(result)
  })
})
