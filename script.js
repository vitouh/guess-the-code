const correctCode = "Y0u_4r3_s0_duMbb";

const easterEggs = {
  "vito": "Vito: “Hey that’s me! Now try again.”",
  "password": "Are you serious? Try again!",
  "admin": "This ain’t an admin panel, nerd.",
  "123456": "Wow. Just... wow.",
  "letmein": "Denied. Try again.",
  "opensesame": "This isn’t a fairytale.",
  "iloveyou": "Aww. But no.",
  "guest": "Guests not allowed.",
  "skibidi": "Sigma? Nope.",
  "rickroll": "You're close... dangerously close."
};

const insults = [
  "That’s just embarrassing.",
  "Were you even trying?",
  "My dog could guess better.",
  "Nope. Not even close.",
  "Yikes. Wrong again.",
  "That’s cute, try again.",
  "You call *that* a guess?",
  "Try harder, brainiac.",
  "I've seen rocks with better logic.",
  "Haha! Wrong.",
  "You must be new here.",
  "Keep dreaming.",
  "You're about 100 IQ points off.",
  "That hurt to watch.",
  "404: Brain not found."
];

function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("message");

  if (input === correctCode) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll
  } else if (easterEggs[input.toLowerCase()]) {
    message.textContent = easterEggs[input.toLowerCase()];
  } else {
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    message.textContent = randomInsult;
  }
}
