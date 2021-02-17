const menuIconMobile = document.querySelector('.menuIconMobile');

export default function mudarIcone() {
  menuIconMobile.classList.toggle('change');
}

menuIconMobile.addEventListener('click', mudarIcone);
