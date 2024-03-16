import { duplicateElements } from "./scratchcards-1"
import { Scratchcard, ScratchcardInfo } from "./types"

export function addDuplicateCount(scratchcards: Scratchcard[]): ScratchcardInfo[] {
  return scratchcards.map((scratchcard) => {
    const duplicates = duplicateElements(scratchcard.playerNumbers, scratchcard.winningNumbers)
    return { ...scratchcard, duplicates }
  })
}

export function bonusScratchcards(number: number): number[] {
  if (number === 0) return []
  let array = []
  for (let index = 0; index < number; index++) {
    array.push(1)
  }
  return array
}

// TODO: I think I need to add the arrays but skip the first element as it never adds a ticket to itself
export function addArrays(arr1: number[], arr2: number[]): number[] {
  const len1 = arr1.length
  const len2 = arr2.length
  // Find the maximum length between the two arrays
  const maxLen = Math.max(len1, len2)

  // Pad the shorter array with zeros
  arr1.push(...Array(maxLen - len1).fill(0))
  arr2.push(...Array(maxLen - len2).fill(0))
  // Add the elements of the two arrays
  const result = arr1.map((value, index) => {
    console.log(value, arr2[index - 1], arr1, arr2)
    if (index === 0) return value
    return value + arr2[index - 1]
  })

  return result
}

export function countScratchcards(scratchcardInfo: ScratchcardInfo[]): number {
  const scratchcards = scratchcardInfo.reduce((prev, current, index) => {
    let ticketCount = [1]
    const duplicates = duplicateElements(current.playerNumbers, current.winningNumbers)
    const arrayOfOnes = bonusScratchcards(duplicates) // Creates an array of [n * 1's] to add to tickeCount array
    const newTicketCount = addArrays(ticketCount, arrayOfOnes)
    console.log({ newTicketCount })
    const extraScratchcards = index === 0 ? (prev += 1) : (prev += newTicketCount[0])
    ticketCount = newTicketCount
    if (duplicates === 0) ticketCount = [1]
    return extraScratchcards
  }, 0)
  return scratchcards
}
/*
Card 1 - [1,1,1,1,1] // 1
Card 2 - [1,2,2,1] // 1 + 2
Card 3 - [3,2] // 
*/
