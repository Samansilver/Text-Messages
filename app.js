const letter_image = document.getElementById("letter-image");
const letter = document.getElementById("letter");

letter_image.addEventListener('click', ()=> {
    //Hide the shape of letter
    letter_image.style.opacity = 0;

    //adding letter after delay
    setTimeout(()=>{
        letter.style.display = "block";
    }, 1000);
});