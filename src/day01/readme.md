## Day One - Trebuchet Part One

1. For each line look at the characters and combine the first
   and last characters that are a number to create a two
   digit number.
2. Store the 2 digit number
3. When all the characters have been scanned, sum the two
   digit numbers together
4. Bonus - Try and refactor this into a reduce?

## Day One - Trebuchet Part Two

Now this includes numbers that are spelled out by letters.
The added complexity of this is that this means that these
numbers that are spelled out need to happen before the
letters of the whole word are split out. This means that
there needs to be some sort of tracking of the character
index a number word is. Then that is compared to the digit
to see which one comes first.

1. For each line look at the word to see if any number words
   exist and return the index of the last character. Return 2
   numbers, of the first and last word number
2. Do above #1 in part 1
3. Compare #2's first number with the index of the number
   word, and last number with 2nd index number word. Whichever
   one is smaller for first, and larger for last digit accept
   those as the correct two digits
4. Do above #3

Approach #2 - Convert the number words into digits and then
rerun part 1. This approach should be more performent as it
means you only need to convert the first and last found
number words into digits as the ones after that are irrelevant

My solution of reversing and converting the first and
last worded digits was a good idea, but I just found out
that words such as "twone" should mean 21 and that is
messing up my code as I do a replacement on the first/last
number word it sees, so in some cases taking away those
characters stop a number from being a word.

Quite frustrated as this is not clear and in this should
have been included in the example from the get go. Gonna
call it a day for this one and maybe revisit it later on,
my current code is working correctly and tests are passing!
