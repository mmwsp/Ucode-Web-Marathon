let movies = ['John', 'Avengers', 'Inception'];
let current = 'John';

const John1 = document.querySelector("#John");
const Avengers1 = document.querySelector("#Avengers");
const Inception1 = document.querySelector("#Inception");

John1.addEventListener("click", John);
Avengers1.addEventListener("click", Avengers);
Inception1.addEventListener("click", Inception);

function John()
{
    document.getElementById("info1").style.display = "contents";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";
}
function Avengers()
{
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "contents";
    document.getElementById("info3").style.display = "none";
}
function Inception()
{
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "contents";
}