// ===============================
// PHOTO LIST
// ===============================

const photos = [

    "photo1.jpg.jpeg",
    "photo2.jpg.jpeg",
    "photo3.jpg.jpeg",
    "photo4.jpg.jpeg",
    "photo5.jpg.jpeg",
    "photo6.jpg.jpeg",
    "photo7.jpg.jpeg",
    "photo8.jpg.jpeg",
    "photo9.jpg.jpeg",
    "photo10.jpg.jpeg"

];

// ===============================
// ELEMENTS
// ===============================

const photo = document.getElementById("photo");
const counter = document.getElementById("counter");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let current = 0;

// ===============================
// SHOW PHOTO
// ===============================

function showPhoto(){

    photo.style.opacity = "0";

    setTimeout(()=>{

        photo.src = photos[current];

        counter.innerHTML = `${current+1} / ${photos.length}`;

        photo.style.opacity = "1";

    },250);

}

// ===============================
// NEXT BUTTON
// ===============================

nextBtn.addEventListener("click",()=>{

    if(current < photos.length-1){

        current++;

        showPhoto();

    }

    else{

        // Last photo completed

        window.location.href = "letter.html";

    }

});

// ===============================
// PREVIOUS BUTTON
// ===============================

prevBtn.addEventListener("click",()=>{

    if(current>0){

        current--;

        showPhoto();

    }

});

// ===============================
// KEYBOARD SUPPORT
// ===============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

// ===============================
// MOBILE SWIPE
// ===============================

let startX = 0;

document.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextBtn.click();

    }

    if(endX-startX>50){

        prevBtn.click();

    }

});