const modal1 = document.getElementById("receitaModal1");
const modal2 = document.getElementById("receitaModal2");
const modal3 = document.getElementById("receitaModal3");
const modal4 = document.getElementById("receitaModal4");
const modal5 = document.getElementById("receitaModal5");
const modal6 = document.getElementById("receitaModal6");

function ativarModal(modal) {
    modal.style.display = "flex"

    window.onclick = function(event) {
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
}
function fecharModal(modal){
    modal.style.display = "none"
}
