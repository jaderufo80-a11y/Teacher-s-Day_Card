const card = document.getElementById('card');
const flipBtn = document.getElementById('flipBtn');
const confettiBtn = document.getElementById('confettiBtn');
const previewBtn = document.getElementById('previewBtn');
const typeBtn = document.getElementById('typeBtn');
const printBtn = document.getElementById('printBtn');
const themeBtn = document.getElementById('themeBtn');
const senderInput = document.getElementById('senderInput');
const messageInput = document.getElementById('messageInput');
const senderName = document.getElementById('senderName');
const frontMessage = document.getElementById('frontMessage');

flipBtn.addEventListener('click', () => {
  card.classList.toggle('flipped');
  flipBtn.textContent = card.classList.contains('flipped') ? 'Close message' : 'Open message';
});

previewBtn.addEventListener('click', () => {
  const msg = messageInput.value.replace(/\n/g, '<br>');
  const name = senderInput.value || '[Your Name]';
  senderName.textContent = name;
  frontMessage.innerHTML = msg + `<br><br>With appreciation,<br><span>${name}</span>`;
});

typeBtn.addEventListener('click', () => {
  const text = messageInput.value;
  let i = 0;
  frontMessage.innerHTML = '';
  const interval = setInterval(() => {
    frontMessage.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 30);
});

printBtn.addEventListener('click', () => window.print());

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? 'Dark mode' : 'Light mode';
});

confettiBtn.addEventListener('click', () => {
  const colors = ['#00e5ff', '#00ffb3', '#ffffff', '#ff7b00'];
  for (let i = 0; i < 80; i++) {
    const confetto = document.createElement('div');
    confetto.classList.add('confetto');
    confetto.style.left = Math.random() * 100 + 'vw';
    confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetto.style.animationDuration = 3 + Math.random() * 2 + 's';
    document.body.appendChild(confetto);
    setTimeout(() => confetto.remove(), 5000);
  }
});

const style = document.createElement('style');
style.textContent = `
.confetto {
  position: fixed;
  top: -10px;
  width: 10px;
  height: 14px;
  border-radius: 2px;
  opacity: 0.9;
  animation: fall linear forwards;
  z-index: 9999;
}
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
