const form = document.getElementById("codeForm");
const input = document.getElementById("codeInput");
const message = document.getElementById("message");
const fileContainer = document.getElementById("fileContainer");

const validCodes = {
  "acr33": {
    type: "file",
    filename: "classified.pdf",
    icon: "pdf-icon.png",
    href: "classified.pdf"
  },
  "vit0isc00L": {
    type: "rickroll",
    href: "rickroll.html"
  },
  "y0Ur3_s0_dUmBB": {
    type: "rickroll",
    href: "rickroll.html"
  }
};

let attempts = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = input.value.trim();

  if (validCodes[code]) {
    const data = validCodes[code];

    if (data.type === "file") {
      fileContainer.innerHTML = `
        <div class="file-download">
          <img src="${data.icon}" alt="File Icon" />
          <a href="${data.href}" download>Download ${data.filename}</a>
        </div>
      `;
      message.textContent = "Access granted.";
    } else if (data.type === "rickroll") {
      fileContainer.innerHTML = `
        <div class="file-download">
          <img src="pdf-icon.png" alt="Fake File Icon" />
          <a href="${data.href}">Download Confidential File</a>
        </div>
      `;
      message.textContent = "Welcome back, Agent.";
    }
    input.value = "";
    attempts = 0;
  } else {
    attempts++;
    message.textContent = "Access denied.";

    if (attempts % 3 === 0) {
      const hint = generateHint("acr33");
      const hintBox = document.createElement("div");
      hintBox.textContent = `Hint: ${hint}`;
      hintBox.classList.add("hint");
      fileContainer.appendChild(hintBox);
    }

    input.value = "";
  }
});

function generateHint(code) {
  // Randomly shuffle the characters
  return code
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}
