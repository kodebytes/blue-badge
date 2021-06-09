// Day 1
let foods = ["apple", "orange", "rice", "bread", "tofu"];
let allergies = ["gluten", "soy"];

for (let i = foods.length - 1; i >= 0; i--) {
  console.log(foods[i][0].toUpperCase() + foods[i].substring(1));
}

const checkLength = (value) => {
  if (value.length > 4) {
    return true;
  }
  return false;
};

const allergyCheck = (value) => {};

for (x of foods) {
  console.log(checkLength(x));
}

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"];
let faceCards = [];
let numberedCards = [];

for (let x of cards) {
  isNaN(x) ? faceCards.push(x) : numberedCards.push(x);
}

console.log(faceCards);
console.log(numberedCards);

let animals = ["bat", "tiger", "yak", "monkey", "snake", "lizard", "panda", "monkey", "hyena"];

let zooTrip = {
  seen: [],
  animalsSeen: 0,
};

const seenAtZoo= (animal) => {
  zooTrip.seen.push(animal);
};

animals.forEach((animal) => {
  //console.log(`${animal} was seen today.`);
  !zooTrip.seen.includes(animal) ? zooTrip.animalsSeen++ : seenAtZoo(animal);
  seenAtZoo(animal);
});

console.log(zooTrip);
