const insultList = [
  "Is that your best try?",
  "Oof, that was rough.",
  "Even AI is disappointed.",
  "Keep trying, keyboard warrior.",
  "I've seen toddlers do better.",
  "That guess hurt me physically.",
  "You miss 100% of the shots you take. Like that one.",
  "Do you even know what you’re doing?",
  "Not even close.",
  "You're making this too easy for me.",
  "Go touch grass.",
  "That was a war crime of an attempt.",
  "You type like you're in the Stone Age.",
  "Epic fail, bro.",
  "Retry? Please don't."
];

function getRandomInsult() {
  const index = Math.floor(Math.random() * insultList.length);
  return insultList[index];
}
