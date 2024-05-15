// Messing around with sets and maps

const word = "Data Structures";
const set = new Set(word.toLowerCase());
// console.log(set.size)

const shayMakesMeHornyWith = new Map(); 
// .set() adds to the map
shayMakesMeHornyWith.set(1, "Ass");
shayMakesMeHornyWith.set(2, "Pussy");
shayMakesMeHornyWith.set(3, "Lips");

for (let key of shayMakesMeHornyWith.keys()) {
    console.log(key);
}

for (let bodyPart of shayMakesMeHornyWith.values()) {
  console.log(bodyPart);
}

for (let map of shayMakesMeHornyWith.entries()) {
    console.log(map);
}