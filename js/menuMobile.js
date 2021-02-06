const btnMenu = document.querySelector('.menuMobileIcone');
const menuMobile = document.querySelector('.menuMobContainerMain');

export default function handleClick() {
  if (menuMobile.className.indexOf('ativo') === -1) {
    menuMobile.classList.add('ativo');
    menuMobile.classList.remove('desativado');
  } else if (menuMobile.className.indexOf('ativo') !== -1) {
    menuMobile.classList.remove('ativo');
    menuMobile.classList.add('desativado');
  }
}
btnMenu.addEventListener('click', handleClick);
