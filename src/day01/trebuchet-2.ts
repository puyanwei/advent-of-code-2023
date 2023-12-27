import { numbersToNumberWordsMap, wordNumbers } from "./consts"
import { data } from "./data"
import { calculateCalibrationValues } from "./trebuchet-1"
import { WordNumberInfo } from "./types"

export function trebuchet2() {
  const newData = addFirstAndLastNumbersToData(data)
  return calculateCalibrationValues(newData)
}

export function addFirstAndLastNumbersToData(input: string) {
  const array = input.split("\n")
  const convertedFirstNumbersLines = array.map((line) =>
    convertWordNumbersToNumber(line, numbersToNumberWordsMap)
  )

  const convertedLastNumberLines = convertedFirstNumbersLines.map((line) => {
    const { reversedLine, reversedMap } = reverseLineAndMap(line, numbersToNumberWordsMap)
    const convertedLine = convertWordNumbersToNumber(reversedLine, reversedMap)
    return reverseString(convertedLine)
  })

  return convertedLastNumberLines.join("\n")
}

export function convertWordNumbersToNumber(string: string, conversionMap: Record<string, number>) {
  let firstWordNumber: WordNumberInfo = { wordNumber: "", charIndex: 10 }
  let newString = ""

  Object.keys(conversionMap).forEach((word) => {
    const matchingCharIndex = string.indexOf(word)
    if (matchingCharIndex === -1) return

    if (matchingCharIndex <= firstWordNumber.charIndex) {
      firstWordNumber = {
        wordNumber: word,
        charIndex: matchingCharIndex,
      }
    }
    return
  })

  // There are no numbers as words
  if (firstWordNumber.wordNumber === "") return string

  const { wordNumber } = firstWordNumber
  const number = `${conversionMap[firstWordNumber.wordNumber]}`
  newString = string.replace(wordNumber, `${wordNumber}${number}`)
  return newString
}

export function reverseString(string: string) {
  return string.split("").reverse().join("")
}

export function reverseLineAndMap(line: string, map: Record<string, number>) {
  const reversedLine = reverseString(line)
  const reversedMap = Object.fromEntries(
    Object.entries(map).map(([key, value]) => [reverseString(key), value])
  )
  return { reversedLine, reversedMap }
}
