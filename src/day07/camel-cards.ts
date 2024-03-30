import { cards, stengthOrder } from "./consts"
import { CamelCard, Card, HandResult } from "./types"

export function camelCards(data: string) {
  const camelCardsData = transformData(data)
  const orderedCamelCardsData = orderByStrength(camelCardsData, stengthOrder, cards)
  const totalWinnings = calculateTotalWinnings(orderedCamelCardsData)
  return totalWinnings
}

function transformData(data: string): CamelCard[] {
  return data.split("\n").map((element) => {
    const [hand, bid] = element.split(" ")
    const handArray: Card[] = hand.split("").map((cardChar) => checkLetterIsCard(cardChar))
    return {
      hand: handArray,
      bid: parseInt(bid),
      result: calculateHandResult(handArray),
      firstCardOfMadeHand: getFirstCardOfMadeHand(handArray, cards),
    }
  })
}

function checkLetterIsCard(cardChar: string): Card {
  if (!cards.includes(cardChar as Card)) throw new Error("card type invalid")
  return cardChar as Card
}

export function calculateHandResult(hand: Card[]): HandResult {
  const countMap: Record<string, number> = {}
  for (const card of hand) {
    // If a card exists + 1 to countMap object, otherwise start it at 1
    countMap[card] ? countMap[card]++ : (countMap[card] = 1)
  }
  const results = Object.values(countMap)
  if (results.includes(5)) return "quintuple"
  if (results.includes(4)) return "quads"
  if (results.includes(3) && results.includes(2)) return "full house"
  if (results.includes(3)) return "trips"
  if (results.filter((num) => num === 2).length === 2) return "two pair"
  if (results.includes(2)) return "pair"
  if (results.includes(1)) return "single"
  throw new Error("Invalid number of duplicates")
}

export function getFirstCardOfMadeHand(hand: Card[], cardStength: Card[]): Card {
  const cardCounts: Record<string, number> = {}

  for (const card of hand) {
    if (cardCounts[card]) return card
    cardCounts[card] = 1
  }
  // No paired card found so just return the first single card
  return hand[0]
}

export function orderByStrength(
  data: CamelCard[],
  handStrength: HandResult[],
  cardStrength: Card[]
): CamelCard[] {
  data.map((camelCard) => {
    if (handStrength.includes(camelCard.result)) {
      return camelCard
    } else {
      throw new Error("Invalid result")
    }
  })
  return [...data].sort((a, b) => {
    const aIndex = handStrength.indexOf(a.result)
    const bIndex = handStrength.indexOf(b.result)
    if (aIndex !== bIndex) return bIndex - aIndex

    // If result is the same, then sort by firstCardOfMadeHand
    const aCardIndex = cardStrength.indexOf(a.firstCardOfMadeHand)
    const bCardIndex = cardStrength.indexOf(b.firstCardOfMadeHand)

    // TODO: might need to account for 2 pairs where first pair is the same
    return aCardIndex - bCardIndex
  })
}

function calculateTotalWinnings(data: CamelCard[]): number {
  return data.reduce((prev, current, index) => {
    const handScore = current.bid * (index + 1)
    return (prev += handScore)
  }, 0)
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
