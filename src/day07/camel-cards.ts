import { cardMap, cards } from "./consts"
import { example } from "./data"
import { CamelCard, Card } from "./types"

export function camelCards() {
  const camelCardsData = transformData(example)
  // add in score to data object
  console.log(camelCardsData)
  return 0
}

function transformData(data: string): CamelCard[] {
  return data.split("\n").map((element) => {
    const [hand, bid] = element.split(" ")
    const handArray: Card[] = hand.split("").map((cardChar) => checkCharIsCard(cardChar))
    return {
      hand: handArray,
      bid: parseInt(bid),
      score: calculateScore(handArray),
    }
  })
}

function checkCharIsCard(cardChar: string): Card {
  if (!cards.includes(cardChar)) throw new Error("card type invalid")
  return cardChar as Card
}

function calculateScore(hand: Card[]): number {
  const singleCardPoints = calculateSingleCardPoints(hand)
  const combinationPoints = calculateCombinationPoints(hand)
  return singleCardPoints + combinationPoints
}

export function calculateSingleCardPoints(hand: Card[]): number {
  return hand.reduce((prev, current) => {
    return Object.keys(cardMap).includes(current)
      ? (prev += cardMap[current])
      : (prev += parseInt(current))
  }, 0)
}

export function calculateCombinationPoints(hand: Card[]): number {
  const countMap: Record<string, number> = {}
  for (const card of hand) {
    // If a card exists + 1 to countMap object, otherwise start it at 1
    countMap[card] ? countMap[card]++ : (countMap[card] = 1)
  }
  const score = Object.values(countMap).reduce((prev, duplicates, index) => {
    if (duplicates < 2) return prev
    if (duplicates === 2) return (prev += 100)
    if (duplicates === 3) return (prev += 1000)
    if (duplicates === 4) return (prev += 10000)
    if (duplicates === 5) return (prev += 100000)
    throw new Error("Invalid number of duplicates")
  }, 0)
  return score
}

/*
Order of tasks
1. Arrange data into workable format;
array of;
  hand: array of cards,
  bid: number
  ranking? : number // might help with part 2

2. Create a system for ranking the cards, could create my own points system?
   Logic should include counting duplicate cards in the hand
   Draws need another logic compare the strength of each card by index

3. Reorder hands by strength
4. Sum up with the bid
*/
