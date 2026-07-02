let currentPassword = "";

const boxes = document.querySelectorAll(".box");

/* Update OTP Boxes */

function updateBoxes(){

    boxes.forEach(box=>{
        box.value = "";
    });

    for(let i=0;i<currentPassword.length;i++){

        boxes[i].value = currentPassword[i];

    }

}

/* Key Sound */

function playKeySound(){

    const sound =
    document.getElementById("keySound");

    sound.currentTime = 0;

    sound.play();

}

/* Add Digit */

function addDigit(num){

    playKeySound();

    if(currentPassword.length < 4){

        currentPassword += num;

        updateBoxes();

    }

}

/* Remove Digit */

function removeDigit(){

    playKeySound();

    currentPassword =
    currentPassword.slice(0,-1);

    updateBoxes();

}

/* Check Password */

function checkPassword(){

    if(currentPassword === "1307"){

        document
        .getElementById("successSound")
        .play();

        document
        .getElementById("bgMusic")
        .play();

        document.querySelector(".container")
        .style.display = "none";

        document.getElementById("teddySection")
        .style.display = "flex";

        startTyping();

    }

    else{

        document.getElementById("result")
        .innerHTML = "❌ Wrong Password";

        currentPassword = "";

        updateBoxes();

    }

}

/* Typewriter Effect */

function startTyping(){

    const text =
    `waah sher  Shivang! 🎉

Correct Password 😎

dekho scorpio n ayi he .

Today is your special day chloo I have something amazing  for you. 🎂✨

Come with me and let's start your birthday surprise! ❤️`;

    const target =
    document.getElementById("typewriter");

    const typingAudio =
    document.getElementById("typingSound");

    typingAudio.loop = true;

    typingAudio.play();

    target.innerHTML = "";

    let i = 0;

    function type(){

        if(i < text.length){

            target.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,40);

        }

        else{

            typingAudio.pause();

            typingAudio.currentTime = 0;

            document.getElementById("nextBtn")
            .style.display = "block";

        }

    }

    type();

}

/* Next Button */

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

    window.location.href = "gift/gift.html";

});