const myName = "Brendan Chico";
let age = 22;
const birthday = "April 10";
let pineapplePizza = false;
const lifeEvents = [
  "I was born in Wyandotte Michigan",
  "I was hospitalized for my asthma",
  "I became an eagle scout",
  "One of my friends died in 2018",
];
if (pineapplePizza) {
  console.log(
    `My name is ${myName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;
while (true) {
  let rdmNumber = Math.floor(Math.random() * 10) + 1;
  if (rdmNumber !== 5) {
    counter++;
    console.log(`${rdmNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `${rdmNumber} === 5, it took ${counter} interations to to randomly generate the number 5`
    );
    break;
  }
}
