const btnMenu = document.querySelector('.menuMobileIcone');
const menuMobile = document.querySelector('.menuMobContainerMain');
const btnSobre = document.querySelector('#btnSobre');
const lista = document.querySelectorAll('.MenuMobLista ul li a'); // seletor 'ALL' que vai selecionar todas as li's do menuMobile

export default function handleClick() {
  if (menuMobile.className.indexOf('ativo') === -1) {
    menuMobile.classList.add('ativo');
    btnMenu.classList.add('on');
    menuMobile.classList.remove('desativado');
    btnMenu.classList.remove('off');
  } else if (menuMobile.className.indexOf('ativo') !== -1) {
    menuMobile.classList.add('desativado');
    btnMenu.classList.add('off');
    menuMobile.classList.remove('ativo');
    btnMenu.classList.remove('on');
  }
}
//quando clicar fora da lista do menuMobile ativa a função novamente fechando o menu
window.onclick = function (event) {
  if (event.target === menuMobile) {
    handleClick();
  }
};

// adiciona um evento de click ao botão do icone do menuMobile e chama a função
btnMenu.addEventListener('click', handleClick);

/* O forEach é usado quando estamos selecionando mais de um item com o mesmo nome, nesse caso as li's, para cada li vai ter um evento de click separado que vai ativar a função novamente */
lista.forEach((li) => {
  li.addEventListener('click', handleClick);
});


