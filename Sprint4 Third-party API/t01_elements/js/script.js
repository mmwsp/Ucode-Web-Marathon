let list = document.getElementById("characters").children; 
for(let i = 0; i < list.length; i++){
    let getClass = list[i].getAttribute("class");
    let getData = list[i].getAttribute("data-element");

    if(getClass !== "good" && getClass !== "evil" && getClass !== "unknown"){
        list[i].setAttribute("class", "unknown");  
    }
    if(!getData){
        list[i].setAttribute("data-element", "none");  
    }
    let elements = list[i].getAttribute("data-element").split(" ");
    list[i].appendChild(document.createElement("br"));

    for (const el of elements) {
        let div = document.createElement("div");
        let line = document.createElement("div");

        if(el === "none"){
            div.setAttribute("class", `elem ${el}`);
            line.setAttribute("class",  `line none`);
            div.appendChild(line)
            list[i].appendChild(div);
        }
        else{
            div.setAttribute("class", `elem ${el}`);
            list[i].appendChild(div);
        }
    }
}
