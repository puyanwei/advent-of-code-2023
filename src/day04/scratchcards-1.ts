import { data } from "./data"
import { Scratchcard } from "./types"

export function scratchcards1(): number {
  return getScratchcardsScore(data)
}

export function getScratchcardsScore(data: string) {
  const resolvedData = resolveData(data)
  return getScore(resolvedData)
}

export function getScore(scratchcards: Scratchcard[]): number {
  return scratchcards.reduce((prev, current) => {
    const duplicates = duplicateElements(current.playerNumbers, current.winningNumbers)
    const score = duplicates === 1 ? 1 : (duplicates / 2) * duplicates
    return (prev += score)
  }, 0)
}

export function resolveData(data: string): Scratchcard[] {
  const resolvedData = data
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

  return resolvedData
}

export function splitNumberString(string: string): number[] {
  const result = string
    .trim()
    .split(" ")
    .filter((element) => element !== "")
    .map((element) => parseInt(element.trim()))
  return result
}

export function duplicateElements(arr1: number[], arr2: number[]): number {
  return arr1.reduce((prev, current) => {
    let count = 0
    arr2.forEach((element) => (element === current ? count++ : 0))
    return (prev += count)
  }, 0)
}
