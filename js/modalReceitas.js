// receita 1
/*function handleClick1() {
  document.querySelector('#receitaModal1').style.display = 'flex';
}
function fechar1() {
  document.querySelector('#receitaModal1').style.display = 'none';
}

// receita 2
function handleClick2() {
  document.querySelector('#receitaModal2').style.display = 'flex';
}
function fechar2() {
  document.querySelector('#receitaModal2').style.display = 'none';
}

// receita 3
function handleClick3() {
  document.querySelector('#receitaModal2').style.display = 'flex';
}
function fechar3() {
  document.querySelector('#receitaModal2').style.display = 'none';
}

// receita 4
function handleClick4() {
  document.querySelector('#receitaModal2').style.display = 'flex';
}
function fechar4() {
  document.querySelector('#receitaModal2').style.display = 'none';
}
// receita 5
function handleClick5() {
  document.querySelector('#receitaModal2').style.display = 'flex';
}
function fechar5() {
  document.querySelector('#receitaModal2').style.display = 'none';
}

// receita 6
function handleClick6() {
  document.querySelector('#receitaModal2').style.display = 'flex';
}
function fechar6() {
  document.querySelector('#receitaModal2').style.display = 'none';
}
*/
const modal1 = document.getElementById('receitaModal1');
const modal2 = document.getElementById('receitaModal2');
const modal3 = document.getElementById('receitaModal3');
const modal4 = document.getElementById('receitaModal4');
const modal5 = document.getElementById('receitaModal5');
const modal6 = document.getElementById('receitaModal6');

function ativarModal(modal) {
  modal.style.display = 'flex';
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
function fecharModal(modal) {
  modal.style.display = 'none';
}
