// const square = (x) => {
//   return x * x;
// };

// console.log(square(2));

// const hello = () => {
//   return 'hello'.toUpperCase();
// };

// console.log(hello());

// Input:  a string
// Output: string capitalized

// 1. access the first letter
// 2. capitalize the first letter
// 3. access the rest of the word
// 4. downcase the rest of the word
// 5. merge the two substrings together

const capitalize = (word) => {
  if (typeof(word) === 'string') {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substring(1).toLowerCase();
  
    return `${firstLetter}${restOfWord}`;
  } else {
    return 'sorry, wrong argument.'.toUpperCase();
  }
};

console.log(capitalize('wagon'));
console.log(capitalize(21));