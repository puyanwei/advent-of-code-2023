import { Gear, PositionRemovalMap } from "./types"

export const gearsInfo: Gear[] = [
  { index: 0, value: "467", length: 3 },
  { index: 5, value: "114", length: 3 },
  { index: 24, value: "35", length: 2 },
  { index: 28, value: "633", length: 3 },
  { index: 44, value: "617", length: 3 },
  { index: 62, value: "58", length: 2 },
  { index: 68, value: "592", length: 3 },
  { index: 83, value: "755", length: 3 },
  { index: 100, value: "664", length: 3 },
  { index: 104, value: "598", length: 3 },
]

export const positionRemovalMap: PositionRemovalMap = {
  2: {
    "top left corner": [0, 1, 2, 3, 9, 10],
    "top right corner": [0, 1, 2, 3, 4, 5],
    "bottom left corner": [0, 5, 6, 7, 8, 9],
    "bottom right corner": [3, 4, 5, 6, 7, 8],
    "left side": [0, 8, 9],
    "right side": [3, 4, 5],
    "top side": [0, 1, 2, 3],
    "bottom side": [5, 6, 7, 8],
    interior: [],
  },
  3: {
    "top left corner": [0, 1, 2, 3, 4, 10, 11],
    "top right corner": [0, 1, 2, 3, 4, 5, 6],
    "bottom left corner": [6, 7, 8, 9, 10, 11],
    "bottom right corner": [4, 5, 6, 7, 8, 9, 10],
    "left side": [0, 10, 11],
    "right side": [4, 5, 6],
    "top side": [0, 1, 2, 3, 4],
    "bottom side": [6, 7, 8, 9, 10],
    interior: [],
  },
} as const
/*
| 01  | 02  | 03  |  04  |
| 10  | xx  | xx  |  05  | 
| 09  | 08  | 07  |  06  |

| 01  | 02  | 03  |  04  | 05  |
| 12  | xx  | xx  |  xx  | 06  | 
| 11  | 10  | 09  |  08  | 07  |
*/
