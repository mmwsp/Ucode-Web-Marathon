let position = 1;  
autoRun();

function nextSlide(n) {
    showSlides(position += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("show");  
    if (n > slides.length) { position = 1 }  
    if (n < 1) { position = slides.length }  
    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[position - 1].style.display = "block";  
}

function autoRun() {
    let slides = document.getElementsByClassName("show");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    position++;
    if (position > slides.length) {
        position = 1
    } 
    slides[position - 1].style.display = "block";
    setTimeout(autoRun, 3000);
}