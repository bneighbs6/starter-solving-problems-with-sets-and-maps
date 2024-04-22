/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 * 
 * initialize a new Map named numbers
 * initialize a new Map named solution
 * 
 * for each element e in A do:
 * add e to numbers
 * 
 * for each element e in A do;
 * calculate diff = N - e
 * if diff is not equal to e then  (1)
 * look up diff in numbers
 * if diff is in numbers then
 * add [e, diff] to solution (2)
 * 
 * convert solution to an array and return it
 */
function sumPairs(A, N) {
    const numbers = new Map(); // Initialize new Map called numbers
    const solution = new Map(); // Initialize new Map called solution
    for (let e of A) { // for each element e of a 
      numbers.set(e, e); // add e to numbers
    }
    for (let e of A) { // for each element e of a 
      let diff = N - e; // calculate diff = N - e
      if (diff !== e) { 
        if (numbers.has(diff)) { // if diff in in numbers then
          solution.set(Math.min(e, diff), Math.max(e, diff)); // add [e, diff] to the solution
        }
      }
    }
  
    return [...solution]; // convert solution to an array and return it
  }

module.exports = sumPairs;
