// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const numberOfVowels = str.match(/[aeiou]/gi);
  if(numberOfVowels){
    return numberOfVowels.length
  } else {
    return 0;
  }
}

module.exports = vowels;
