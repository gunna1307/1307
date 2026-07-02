const giftBox = document.getElementById("giftBox");
const lid = document.querySelector(".lid");

const cakeSection = document.getElementById("cakeSection");
const teddySection = document.getElementById("teddySection");

const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

const openSound = document.getElementById("openSound");
const typing = document.getElementById("typing");
const bgMusic = document.getElementById("bgMusic");

/* ------------------------------
   GIFT CLICK
--------------------------------*/

giftBox.addEventListener("click",()=>{

    giftBox.style.pointerEvents="none";

    openSound.play();

    bgMusic.play();

    /* Open Lid */

    lid.style.transform="translateY(-140px) rotate(-18deg)";

    /* Hide Gift */

    setTimeout(()=>{

        giftBox.style.opacity="0";

        document.getElementById("clickText").style.display="none";

    },900);

    /* Show Cake */

    setTimeout(()=>{

        cakeSection.style.display="block";

        createConfetti();

    },1200);

    /* Teddy */

    setTimeout(()=>{

        teddySection.style.display="flex";

        typeMessage();

    },2600);

});


/* ------------------------------
   TYPEWRITER
--------------------------------*/

const text =
`Before we move ahead...

🎂 Make a wish Shivang ❤️

Close your eyes for 5 seconds...

Dream BIG ✨

This surprise is made with lots of love and hardwork just for you.`;

let i=0;

function typeMessage(){

    typing.loop=true;

    typing.play();

    function write(){

        if(i<text.length){

            message.innerHTML+=text.charAt(i);

            i++;

            setTimeout(write,40);

        }

        else{

            typing.pause();

            typing.currentTime=0;

            nextBtn.style.display="inline-block";

        }

    }

    write();

}


/* ------------------------------
   NEXT BUTTON
--------------------------------*/

nextBtn.addEventListener("click",()=>{

    // NEXT PAGE

    window.location.href="../memories/memories.html";

});


/* ------------------------------
   CONFETTI
--------------------------------*/

function createConfetti(){

    const colors=[
        "#ff4d6d",
        "#ffbe0b",
        "#3a86ff",
        "#06d6a0",
        "#ffffff",
        "#ff69b4"
    ];

    const area=document.getElementById("confetti");

    for(let i=0;i<180;i++){

        let piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-30px";

        piece.style.width="8px";

        piece.style.height="18px";

        piece.style.position="absolute";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.transform=
        `rotate(${Math.random()*360}deg)`;

        piece.style.animation=
        `fall ${3+Math.random()*3}s linear forwards`;

        area.appendChild(piece);

    }

}