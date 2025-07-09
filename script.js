function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("message");
  const hint = document.getElementById("hint");

  if (input === "y0urr3_s0_dumB") {
    document.getElementById("container").style.display = "none";
    document.getElementById("playScreen").style.display = "flex";
  } else if (input.toLowerCase() === "password") {
    document.getElementById("container").style.display = "none";
    document.getElementById("easterEggScreen").style.display = "flex";
    document.getElementById("patrick").src = "https://www.youtube.com/embed/3o3Z3Z_rURU?autoplay=1&mute=1";
  } else {
    message.textContent = insults[Math.floor(Math.random() * insults.length)];
    if (attempts < hints.length - 1) {
      attempts++;
      hint.textContent = hints[attempts];
    }
    setTimeout(() => (message.textContent = ""), 2000);
  }
}

function playRickroll() {
  document.getElementById("playScreen").innerHTML = `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0" allow="autoplay"></iframe>
  `;
}
