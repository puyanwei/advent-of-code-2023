import { trebuchet1 } from "./day01/trebuchet-1"
import { trebuchet2 } from "./day01/trebuchet-2"
import { cubeConundrum1 } from "./day02/cube-conundrum-1"
import { cubeConundrum2 } from "./day02/cube-conundrum-2"
import { gearRatios1 } from "./day03/gear-ratios-1"
import { scratchcards1 } from "./day04/scratchcards-1"
import { camelCards } from "./day07/camel-cards"
import { data, example } from "./day07/data"

const intro = "Hello, Mr Puyan Wei. Welcome to Advent of Code 2023!"

console.log(intro)

// console.log(`Day 1, part 1 - The sum of all of the calibration values is ${trebuchet1()}`)
// console.log(
//   `Day 1, part 2 - The sum of all of the calibration values is ${trebuchet2()} (incorrect! 😢)`
// )

// console.log(`Day 2, part 1 - The sum of all of the possible games is ${cubeConundrum1()}`)
// console.log(
//   `Day 2, part 2 - The sum of all of the possible games with the fewest number of cubes is ${cubeConundrum2()}`
// )
// console.log(`Day 3, part 1 - The sum of all of the parts is ${gearRatios1()}`)
// console.log(`Day 4, part 1 - The points from the scratchcards are ${scratchcards1()}`)
console.log(`The total winnings are ${camelCards(data)}`)
