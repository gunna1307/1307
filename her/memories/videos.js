// ===========================
// ELEMENTS
// ===========================

const typingText = document.getElementById("typingText");
const videoPlayer = document.getElementById("videoPlayer");
const nextVideo = document.getElementById("nextVideo");

// ===========================
// VIDEOS
// ===========================

const videos = [

    "video1.mp4.mp4",
    "video2.mp4.mp4"

];

let currentVideo = 0;

// ===========================
// TYPEWRITER MESSAGE
// ===========================

const message =
`Hey Shivang... ❤️

Today's last surprise is waiting for you.

I recorded these videos specially for your birthday.

Watch them one by one...

I hope they make you smile. 🥹🎂
and yess isse tumhe pata chl jaye how important uhh are for me 
mene first time esa kuch record kiya he i don't know kesa lagega tumhee `;

let index = 0;

function typeWriter(){

    if(index < message.length){

        if(message.charAt(index) == "\n"){

            typingText.innerHTML += "<br>";

        }

        else{

            typingText.innerHTML += message.charAt(index);

        }

        index++;

        setTimeout(typeWriter,35);

    }

}

window.onload = typeWriter;

// ===========================
// NEXT VIDEO BUTTON
// ===========================

nextVideo.addEventListener("click",()=>{

    if(currentVideo < videos.length-1){

        currentVideo++;

        videoPlayer.src = videos[currentVideo];

        videoPlayer.load();

        videoPlayer.play();

        nextVideo.innerHTML="Finish Surprise ❤️";

    }

    else{

        window.location.href="final.html";

    }

});

// ===========================
// AUTO NEXT
// ===========================

videoPlayer.addEventListener("ended",()=>{

    if(currentVideo < videos.length-1){

        nextVideo.style.display="inline-block";

    }

    else{

        window.location.href="final.html";

    }

});