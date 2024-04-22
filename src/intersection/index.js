/**
 * initialize a new Map
 * initialize a new Set
 * for each element e of a do:
 * add e to the Map
 * for each element e of b do:
 * lookup e in the Map
 * if e is in the Map then
 * add e to the Set
 * convert the Set to an array and return
 */

function intersection(a, b) {
    const map = new Map(); // Initialize a new Map
    const set = new Set(); // Iniitialize a new Set

    for (let elem of a) { // For each element of a
        map.set(elem, undefined); // add e to the Map; need to add a second parameter for the value of a map.add();
    }
    for (let elem of b) { // For each elem of b
        if (map.has(elem)) { // Lookup e in the map
            set.add(elem); // if elem is in the Map then add elem to the Set
        }
    }
    return [...set]; // Return set, now an array 
}

module.exports = intersection;
