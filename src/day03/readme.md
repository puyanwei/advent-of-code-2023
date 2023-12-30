## Day Two - Gear Ratios Part One

The most obvious way of doing this is to look at the adjacent tiles on a part and see if there is a symbol there. If there isn't, then the part is consider to be not a part number and should be ignored.

If we assume that all tiles are part of one long array then we have to find a way of targeting the correct indexes corresponding to the adjacent tiles. The parts at the end/start of each row/column should also be considered as those will not have any adjacent tiles.

Lets take the following example to work things out (please ignore the first row of blank cells, that's a markdown formatting issue);

|     |     |       |     |     |
| --- | --- | ----- | --- | --- |
| 1   | 2   | 3     | 4   | 5   |
| 6   | 7   | **8** | 9   | 10  |
| 11  | 12  | 13    | 14  | 15  |
| 16  | 17  | 18    | 19  | 20  |
| 21  | 22  | 23    | 24  | 25  |

rows = 5
columns = 5
selectedPart = 9 (index of array, which starts at zero)
partValue = 8

topLeft = selectedPart - (columns + 1)
top = selectedPart - columns
topRight = selectedPart - (columns - 1)
left = selectedPart - 1
right = selectedPart + 1
bottomLeft = selectedPart + (columns - 1)
bottom = selectedPart + columns
bottomRight = selectedPart + (columns + 1)

For each part, there should be 8 checks on those positions (array indexes) to see if a symbol exists. If there is any, then the part is considered to be true.

However, not all the parts have 8 positions, so that needs to be taken into account as well. If any of the parts are on any of the edges of the grid then there will not be 8 positions there should be less as they would not exist.

isLeftSide = selectedPart + 1 / columns === 0 (No BL, L, TL)
isRightSide = selectedPart + 1 / columns === 0 (No BR, R, TR)
isTop = selectedPart + 1/ row === 0 (No TL, T, TR)
isBottom = selectedPart + 1 / row === 0 (No BL, B, BR)

\*\* Need to double check these calculations, not confident over them!

#### Plan

1. Using the example data, write functions that check if the selectedPart is on any side and return the invalid positions based on what side it is. Make sure that corners work, and they would include 2 sides.
2. Write the function that returns an array of indexes based on the selected index, which are the adjacent ones. This should include having the columns and rows as the parameters
3. Write another function that deducts the rejected positions if the selectedPart is on a side
4. Using the final positions, iterate through those positions and check if there are any symbols. If there is not, then return false.
5. Iterate through the whole grid doing steps 1-4 above and save the part values in another array
6. Sum the values of the array

#### Plan Take 2

Looking at the example it shows that the parts are not just one digit that take up one cell, they are multiple cells in length of either 2 or 3, which effects the adjacent cells as well which makes this a lot more complex. I had also missed out the fact that we have to identify the selected parts indexes too!

This requires having more data on the part itself. A first iteration needs to happen where the parts are identified, value recorded and number of cells recorded so that the adjacent tiles can be identified. There are only 2 and 3 digit numbers. Then on the 2nd iteration use this info to adjust the adjacent cells and look for symbols.

1. Iterate through the data as an array and identify where the parts are via recording the index position of the parts, the value of it, and the length.
2. Steps 1-6 as above...

#### Functions and Tests

newData is the data split by characters to make one array.

- findParts(newData) => object with part info - position (index), length (2 or 3), value (the number itself)
- getAdjacentPositions(array, rows, columns, cell) => returns an array of indexes based on the selectedPart
- isOnSide(array, rows, columns, positions) => returns new index positions discarding ones that don't exist because they are on the side
- checkSymbols(newData, positions) => final iteration checking adjacent cells for symbols, returning the value if true
