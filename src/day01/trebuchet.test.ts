import { dayOne } from "./trebuchet-1"

describe("testing that test suite works", () => {
  test("does it work?", () => {
    expect(true).toBe(true)
  })
  test("does it work when exporting a function?", () => {
    expect(dayOne()).toEqual("Hello from day one function!")
  })
})
