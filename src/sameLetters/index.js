/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */

/*
Input: an array of words named words

instantiate a new Map named results

for each word in the words array do:
  lowercase word
  find all unique letters in word
    create a Set with all the letters of the word to remove duplicates
    create an array of letters from the Set and sort alphabetically
    use join to create a string from the array
  if the sorted string of letters is a key in the results Map then
    add word to the array associated with that key
  else
    make a new entry in the results Map with key = sorted string of letters and the value an array with word as its only element
return the results Map
*/
function sameLetters(words) {
    const results = new Map(); // Initiate a new Map called results

    for (let word of words) { // For each word in the words array do: 
        word = word.toLowerCase(); // Lower case word
        const wordSet = new Set(word); // Create a Set with all the letters of the word to remove duplicates
        const wordArray = [...wordSet].sort(); // Create an array of letters from the Set and sort alphabetically
        const wordString = wordArray.join(""); // use join to create a string from the array
        if (results.has(wordString)) { // if the sorted string of letters is a key in the results Map then
            results.get(wordString).push(word); // Add word to the array associated with that key
        } else { // else
            results.set(wordString, [word]); // Make a new entry in results Map.
        }
    }
    return results;
}

module.exports = sameLetters;