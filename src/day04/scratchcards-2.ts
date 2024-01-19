import { duplicateElements } from "./scratchcards-1"
import { Scratchcard, ScratchcardInfo } from "./types"

export function addDuplicateCount(scratchcards: Scratchcard[]): ScratchcardInfo[] {
  return scratchcards.map((scratchcard) => {
    const duplicates = duplicateElements(scratchcard.playerNumbers, scratchcard.winningNumbers)
    return { ...scratchcard, duplicates }
  })
}

export function bonusScratchcards(number: number): number[] {
  return Array(number).fill(1)
}

export function addArrays(arr1: number[], arr2: number[]): number[] {
  const len1 = arr1.length
  const len2 = arr2.length

  // Find the maximum length between the two arrays
  const maxLen = Math.max(len1, len2)

  // Pad the shorter array with zeros
  arr1.push(...Array(maxLen - len1).fill(0))
  arr2.push(...Array(maxLen - len2).fill(0))

  // Add the elements of the two arrays
  const result = arr1.map((value, index) => value + arr2[index])

  return result
}

export function countScratchcards(scratchcardInfo: ScratchcardInfo[]): number {
  const scratchcards = scratchcardInfo.reduce((prev, current, index) => {
    // Keep track of future scratchcards and calculate current one
    let ticketCount = [1]
    const duplicates = duplicateElements(current.playerNumbers, current.winningNumbers)
    const extraScratchcards = (prev += duplicates + ticketCount[0])
    ticketCount = addArrays(ticketCount, bonusScratchcards(duplicates))
    ticketCount.shift()
    return extraScratchcards
  }, 0)
  return scratchcards
}
