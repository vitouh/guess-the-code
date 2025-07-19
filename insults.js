const insults = [
  "You call that a code?",
  "My pet rock could guess better.",
  "Try again, genius.",
  "Even a toaster would do better.",
  "You're embarrassing yourself.",
  "Wrong. Again. Impressive consistency.",
  "Go touch some grass.",
  "Nice try... not.",
  "Better luck next life.",
  "Bruh.",
  "You really thought that would work?",
  "Please stop. For your own sake.",
  "I bet you clicked submit with confidence."
];

function getRandomInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}
