
// Load animation frames
const frames = [];
const frameCount = 20; // change to however many frames is in penguinAnimation foldedf

for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `penguinAnimationHome/frame${i}.png`;
    frames.push(img);
}
const canvas = document.getElementById("penguinCanvas");
const ctx = canvas.getContext("2d");

let current = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frames[current], 0, 0, canvas.width, canvas.height);

    current = (current + 1) % frames.length;
    requestAnimationFrame(animate);
}

window.onload = () => animate();









let username = "Vixceity";

// Update welcome message
document.getElementById("welcome-text").textContent = `Welcome back, ${username}!`;

