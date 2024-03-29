import { cards, example } from "../Day07/data"
import { CamelCard, Card } from "./types"

export function camelCards() {
  console.log(transformData(example))
  return transformData(example)
}

function transformData(data: string): CamelCard[] {
  return data.split("\n").map((element) => {
    const [hand, bid] = element.split(" ")
    const handArray: Card[] = hand.split("").map((cardChar) => checkCharIsCard(cardChar))
    return {
      hand: handArray,
      bid: parseInt(bid),
      score: 0,
    }
  })
}

function checkCharIsCard(cardChar: string): Card {
  if (!cards.includes(cardChar)) throw new Error("card type invalid")
  return cardChar as Card
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
