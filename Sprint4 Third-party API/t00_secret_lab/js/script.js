let state = 1;

function transformation(){
    let laba = document.getElementById("lab");
    let heroy = document.getElementById("hero");
    
    state += 1;
    if(state % 2 === 0){
        heroy.innerHTML = "Bruce Banner";
        laba.style.background = "#ffb300";
        heroy.style.fontSize = "60px";
        heroy.style.letterSpacing = "2px";

    }
    else {
        heroy.innerHTML = "HULK";
        laba.style.background = "#70964b";
        heroy.style.fontSize = "130px";
        heroy.style.letterSpacing = "6px";
    }
}

transformation();