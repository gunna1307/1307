// ===========================
// ELEMENTS
// ===========================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");
const continueBtn = document.getElementById("continueBtn");

// ===========================
// LETTER MESSAGE
// ===========================

const message = `hello Shivang ❤️,

Happy Birthday to you! 🎂🥳

I hope today brings you lots of happiness, laughter and beautiful memories.

This little website is just a small surprise made especially for you.

Every click...
Every animation...
Every photo...
Every little detail...

was made with lots of love .

I hope this birthday becomes one of your favourite memories.

Keep smiling.
Keep shining.
Stay exactly the amazing person you are.
no matter hum baat krte he ya nhi sath he ya nhii 
but you always be a special person for me 
Hmesa haste rena mast rena even koi problem bhi aye to yhi sochna koi baat nhi 
haar problem kuch naya sikha ke jati hee so patience ke sath handle krna 
I wish tum hmesa haste raho , theek raho .

May all your dreams come true and may this year bring endless happiness into your life.

Once again...

🎉 Happy Birthday Shivang! 🎉

Now...
I have one more surprise waiting for you... ❤️`;

let i = 0;

// ===========================
// OPEN ENVELOPE
// ===========================

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        letter.style.display = "block";

        typeLetter();

    }, 900);

});

// ===========================
// TYPEWRITER
// ===========================

function typeLetter(){

    function typing(){

        if(i < message.length){

            if(message.charAt(i) === "\n"){

                letterText.innerHTML += "<br>";

            }else{

                letterText.innerHTML += message.charAt(i);

            }

            i++;

            setTimeout(typing,35);

        }

        else{

            continueBtn.style.display = "inline-block";

        }

    }

    typing();

}

// ===========================
// CONTINUE BUTTON
// ===========================

continueBtn.addEventListener("click",()=>{

    window.location.href = "videos.html";

});