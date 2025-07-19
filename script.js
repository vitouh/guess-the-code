const validPasswords = ["vitoiscool", "y0uR3_s0_dUMbb"];
const easterEggs = ["iamstupid", "ilovepink", "caseohfan", "obamaiscool", "skibidirizz", "vito_the_goat"];
const message = document.getElementById("message");

function checkCode() {
  const input = document.getElementById("codeInput").value.toLowerCase().trim();

  if (validPasswords.includes(input)) {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("endScreen").classList.remove("hidden");
  } else if (easterEggs.includes(input)) {
    window.location.href = "rickroll.mp4";
  } else {
    const insult = getRandomInsult();
    message.textContent = insult;
  }
}
