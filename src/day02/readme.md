## Day Two - Cube Conundrum Part One

This looks like a simple case of seeing if any of the coloured cubes' numbers are higher than the maximum colour cubes' number.
If any of the cubes are over their number, then that game is considered to be impossible.

#### Plan

Upon preparing for part 2, I think it would be a good idea to put the data in a JSON object so that it can be flexible for whatever the 2nd part will ask me to do.

1. Split the data by line into an array of lines
2. Iterate through the lines by splitting it with the keyword of "Game", and put those into an array of objects. The resulting structure wanted would look something like this;

```
Game 1: 3 blue, 4 red;
Game 2: 1 blue, 2 green;
```

```
const newData = [
  {
    gameNumber: 1,
    isPossible: true,
    cubesGrabbed: [
      {
        colour: "blue",
        number: 3,
      },
      {
        colour: "red",
        number: 4,
      },
    ],
  },
  {
    gameNumber: 2,
    isPossible: true,
    cubesGrabbed: [
      {
        colour: "blue",
        number: 1,
      },
      {
        colour: "green",
        number: 2,
      },
    ],
  },
]

```

3. For each game, we want to iterate through the colours and find out if they are larger then the stated maximum amount. If any of them are, we can consider that game to be impossible, and we can mark the new data's isPossible key to be true or false.
4. Iterate through the possible games and sum up the game numbers

#### Functions & Tests

- cubeConundrum1( ) => Master function that runs functions below and returns the final sum
- convertDataToGameObject(data) => newData
- calculatePossibleGames(newData, objectOfMaxNumbers)
- sumPossibleGames(newData)
