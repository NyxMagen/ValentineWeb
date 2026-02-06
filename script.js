// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Sounds
const bgMusic = new Audio("bg.mp3");
const meowSound = new Audio("meow.mp3");

bgMusic.loop = true;
bgMusic.volume = 0;
meowSound.volume = 0.6;

// Fade-in music 
function fadeInMusic() {
    let volume = 0;
    const targetVolume = 0.25;
    const step = 0.01;

    bgMusic.play();

    const fade = setInterval(() => {
        volume += step;
        if (volume >= targetVolume) {
            bgMusic.volume = targetVolume;
            clearInterval(fade);
        } else {
            bgMusic.volume = volume;
        }
    }, 100);
}

// Envelope click
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    fadeInMusic();

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Move NO button
function moveNoButton() {
    // Randomize pitch between 0.8 and 1.2 for playful effect
    meowSound.playbackRate = Math.random() * 0.4 + 0.8;

    meowSound.currentTime = 0;
    meowSound.play();

    // Move the NO button
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// YES clicked
yesBtn.addEventListener("click", () => {
    bgMusic.volume = 0.15;

    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});
