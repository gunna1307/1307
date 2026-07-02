// ===============================
// ELEMENTS
// ===============================

const typingText = document.getElementById("typingText");
const typingSound = document.getElementById("typingSound");

const messageCard = document.getElementById("messageCard");
const videoCard = document.getElementById("videoCard");

const bgMusic = document.getElementById("bgMusic");

// ===============================
// START BACKGROUND MUSIC
// ===============================

window.addEventListener("load", () => {

    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
    });

    typeWriter();

});

// ===============================
// TYPEWRITER MESSAGE
// ===============================

const message = `Hey Shivang... 🥹❤️

Don't be so excited!

There are two special surprises waiting just for you.

Choose one first...

We'll come back for the other one later. 🎁🧸`;

let index = 0;

function typeWriter() {

    typingSound.loop = true;
    typingSound.play();

    function typing() {

        if (index < message.length) {

            if (message.charAt(index) === "\n") {

                typingText.innerHTML += "<br>";

            } else {

                typingText.innerHTML += message.charAt(index);

            }

            index++;

            setTimeout(typing, 38);

        } else {

            typingSound.pause();
            typingSound.currentTime = 0;

        }

    }

    typing();

}

// ===============================
// CARD HOVER SOUND EFFECT
// ===============================

[messageCard, videoCard].forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ===============================
// MESSAGE CARD
// ===============================

messageCard.addEventListener("click", () => {

    messageCard.style.transform = "scale(.95)";

    setTimeout(() => {

        window.location.href = "photos.html";

    }, 250);

});

// ===============================
// VIDEO CARD
// ===============================

videoCard.addEventListener("click", () => {

    videoCard.style.transform = "scale(.95)";

    setTimeout(() => {

        window.location.href = "videos.html";

    }, 250);

});