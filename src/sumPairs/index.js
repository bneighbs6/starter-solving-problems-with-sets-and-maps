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
    const numbers = new Map();
    const solution = new Map();

    for (let elem of A) {
        numbers.set(elem, undefined);
    }

    for (let elem of A) {
        let diff = N - elem;
        if (diff !== elem && numbers.has(diff)) {
            solution.set([elem, diff], undefined);
        }
    }

    return [...solution.keys()];
}

module.exports = sumPairs;
