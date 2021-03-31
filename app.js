// Maps and Sets Exercise
// Quick Question #1

// What does the following code return?

new Set([1,1,2,2,3,4])

// ***ANSWER***

// {1, 2, 3, 4} ***No Duplicates***

// *************************************************

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("")

// ***ANSWER***

// returns "ref"

// ****************************************************

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// ***ANSWER***

// returns 0: {Array(3) => true}
//         1: {Array(3) => false}

// *******************************************************

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// ***ANSWER***

const hasDuplicate = arr => new Set(arr).size !== arr.length

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// **********************************************************

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// ***ANSWER***

const isVowel = char => "aeiou".includes(char);

const vowelCount = str => {
   const vMap = new Map();
   for(let char of str) {
      let lowercaseChar = char.toLowerCase();
      if(isVowel(lowercaseChar)) {
         if(vMap.has(lowercaseChar)) {
            vMap.set(lowercaseChar, vMap.get(lowercaseChar) + 1);
         } else {
            vMap.set(lowercaseChar, 1);
         }
      }
   }
   return vMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

