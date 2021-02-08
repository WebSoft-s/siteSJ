const btnMenu = document.querySelector('.menuMobileIcone');
const menuMobile = document.querySelector('.menuMobContainerMain');

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
btnMenu.addEventListener('click', handleClick);
