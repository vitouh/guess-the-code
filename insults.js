const insults = [
  "Are you even trying?",
  "My grandma types better codes.",
  "That's just sad.",
  "Try harder, maybe?",
  "Incorrect again, genius.",
  "You're embarrassing yourself.",
  "Keep guessing, clown."
];

function getRandomInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}
