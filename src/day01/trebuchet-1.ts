export function trebuchet() {
  return "Hello from day one function!"
}

export function calculateCode(input: string) {
  const array = input.split("\n")
  const arrayOfTwoDigitNumbers = array.map((line) => twoDigitCreator(line))
  const sum = sumDigits(arrayOfTwoDigitNumbers)
  return sum
}

export function sumDigits(numbers: number[]) {
  return numbers.reduce((prevValue, current) => {
    return (prevValue += current)
  }, 0)
}

export function twoDigitCreator(string: string) {
  const array = string.split("")
  const reversedArray = [...array].reverse()

  const firstDigit = findFirstNumber(array)
  const secondDigit = findFirstNumber(reversedArray)

  if (!firstDigit) throw new Error("No first digit found")
  if (!secondDigit) throw new Error("No second digit found")

  const code = parseInt(`${firstDigit + secondDigit}`)
  return code
}

function findFirstNumber(array: string[]) {
  return array.find((element) => {
    if (parseInt(element)) return element
    return
  })
}
