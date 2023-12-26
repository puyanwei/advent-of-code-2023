import { numbersToNumberWordsMap, wordNumbers } from "./consts"
import { data } from "./data"
import { NumberWords, WordNumberInfo } from "./types"

// export function trebuchet2() {
//   return calculateCalibrationValues(data)
// }

// export function calculateCalibrationValues(input: string) {
// const array = input.split("\n")
// const arrayOfTwoDigitNumbers = array.map((line) => twoDigitCreator(line))
// const sum = sumDigits(arrayOfTwoDigitNumbers)
// return sum
// }

// export function sumDigits(numbers: number[]) {
//   return numbers.reduce((prevValue, current) => {
//     return (prevValue += current)
//   }, 0)
// }

// export function twoDigitCreator(string: string) {
//   const array = string.split("")
//   const reversedArray = [...array].reverse()

//   const firstDigit = findFirstNumber(array)
//   const secondDigit = findFirstNumber(reversedArray)

//   if (!firstDigit) throw new Error("No first digit found")
//   if (!secondDigit) throw new Error("No second digit found")

//   const code = parseInt(`${firstDigit + secondDigit}`)
//   return code
// }

// function findFirstNumber(array: string[]) {
//   return array.find((element) => {
//     if (parseInt(element)) return element
//     return
//   })
// }

export function convertWordNumberToNumber(string: string) {
  let firstWordNumber: WordNumberInfo = { wordNumber: "", index: 10 }
  let lastWordNumber: WordNumberInfo = { wordNumber: "", index: 0 }
  let newString = ""

  wordNumbers.forEach((wordNumber) => {
    const matchingCharIndex = string.indexOf(wordNumber)
    if (matchingCharIndex === -1) return null

    console.log({ wordIndex: matchingCharIndex, wordNumber })
    if (matchingCharIndex <= firstWordNumber.index) {
      firstWordNumber = { wordNumber, index: matchingCharIndex }
    }
    if (matchingCharIndex >= lastWordNumber.index) {
      lastWordNumber = { wordNumber, index: matchingCharIndex }
    }
    return
  })

  if (firstWordNumber.wordNumber === "" || lastWordNumber.wordNumber === "")
    throw new Error("No worded number found")

  newString = string.replace(
    firstWordNumber.wordNumber,
    `${numbersToNumberWordsMap[firstWordNumber.wordNumber]}`
  )
  newString = newString.replace(
    lastWordNumber.wordNumber,
    `${numbersToNumberWordsMap[lastWordNumber.wordNumber]}`
  )
  return newString
}
