// ===============================
// ELEMENTS
// ===============================

const music = document.getElementById("bgMusic");
const replayBtn = document.getElementById("replayBtn");

// ===============================
// START MUSIC
// ===============================

window.addEventListener("load", () => {

    if (music) {

        music.volume = 0.4;

        music.play().catch(() => {

            console.log("Autoplay blocked.");

        });

    }

});

// ===============================
// REPLAY BUTTON
// ===============================

replayBtn.addEventListener("click", () => {

    window.location.href = "../index.html";

});

// ===============================
// FLOATING HEARTS
// ===============================

setInterval(() => {

    const heart = document.createElement("span");

    heart.innerHTML = ["❤️","💖","💕","💗","💝","✨","🎈"][Math.floor(Math.random()*7)];

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "%";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.animation = "float 8s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

},900);