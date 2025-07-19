const insults = [
  "You absolute donut.",
  "You're as useless as a white crayon.",
  "Did you think that would work?",
  "Wrong again, genius.",
  "Maybe try Googling next time.",
  "Your keyboard deserves better."
];

function getRandomInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}
