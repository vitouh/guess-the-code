const input = document.getElementById('commandInput');
const terminal = document.getElementById('terminal');
const output = document.querySelector('.output');
const failSound = document.getElementById('failSound');
const successSound = document.getElementById('successSound');

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    let message = "";

    if (command === "open secret") {
      message = "ACCESS GRANTED. Welcome, Agent Don Vito.";
      successSound.play();
    } else if (command === "rickroll") {
      message = "Redirecting you to something unexpected...";
      successSound.play();
      setTimeout(() => window.location.href = "rickroll.mp4", 1500);
    } else if (command === "show file") {
      message = "🔓 SECRET FILE: classified.pdf [icon shown]";
      const icon = document.createElement("img");
      icon.src = "pdf-icon.png";
      icon.style.width = "32px";
      terminal.appendChild(icon);
      successSound.play();
    } else {
      const insult = insults[Math.floor(Math.random() * insults.length)];
      message = "ACCESS DENIED: " + insult;
      failSound.play();
    }

    const p = document.createElement('p');
    p.textContent = message;
    terminal.insertBefore(p, input);
    input.value = "";
  }
});
