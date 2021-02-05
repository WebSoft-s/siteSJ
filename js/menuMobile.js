const btnMenu = document.querySelector('.menuMobileIcone');

export default function handleClick() {
  document.querySelector('.menuMobContainerMain').classList.toggle('ativo');
}
btnMenu.addEventListener('click', handleClick);
