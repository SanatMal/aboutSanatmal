function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chatBox");
  
  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  input.value = "";

  // Auto-reply simulation
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot";
    botMsg.textContent = "Thanks for your message! Sanat will get back to you soon 😊";
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 700);

  chatBox.scrollTop = chatBox.scrollHeight;
}
