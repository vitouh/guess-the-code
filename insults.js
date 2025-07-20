const insults = [
  "Is that your best guess?",
  "Try harder, agent.",
  "That was just sad.",
  "You call that hacking?",
  "Even a toaster could do better.",
  "Incorrect. Again.",
  "I've seen toddlers do better.",
  "Wrong. You're wasting your time.",
  "Nice try, loser.",
  "Maybe computers aren't for you.",
];

function getRandomInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}
