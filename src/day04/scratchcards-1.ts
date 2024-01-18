import { Scratchcard } from "./types"

export function scratchcards() {
  return 1
}

export function resolveData(data: string) {
  const numbers = data
    .split("\n")
    .map((element) => element.split(":"))
    .flat(1)
    .filter((element) => !element.includes("Card"))
    .map((element) => {
      const [first, second] = element.split("|")
      return {
        winningNumbers: splitNumberString(first),
        playerNumbers: splitNumberString(second),
      }
    })

  return numbers
}

export function splitNumberString(string: string): number[] {
  const result = string
    .trim()
    .split(" ")
    .filter((element) => element !== "")
    .map((element) => parseInt(element.trim()))
  return result
}
