const modal = document.getElementById("receitaModal");
const btnReceita1 = document.getElementById("btnReceita1");
/*const btnReceita2 = document.getElementById("btnReceita2");
const btnReceita3 = document.getElementById("btnReceita3");
const btnReceita4 = document.getElementById("btnReceita4");
const btnReceita5 = document.getElementById("btnReceita5");
const btnReceita6 = document.getElementById("btnReceita6");*/
const span = document.getElementsByClassName("close")[0];

btnReceita1.onclick = function() {
    modal.style.display = "flex"
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}
