function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const responseElement = document.getElementById("response");

  if (passwordResponses.hasOwnProperty(input)) {
    responseElement.textContent = passwordResponses[input];
  } else {
    const randomInsults = [
      "Wrong. Try again, genius.",
      "That’s not it. Do better.",
      "You call *that* a guess?",
      "You're about as useful as a semicolon in Python.",
      "Access denied. Like your crush rejecting you.",
      "Nope. Not even close.",
      "You're lost, aren't you?",
      "404: Brain not found.",
      "Wrong. Just like your life choices.",
      "Try again. If your brain allows it."
    ];
    responseElement.textContent = randomInsults[Math.floor(Math.random() * randomInsults.length)];
  }
}
