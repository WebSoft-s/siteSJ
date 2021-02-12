const btnWhatsCard = document.querySelector('.closeWhats');
const whatsCard = document.querySelector('.whatsCard');

export default function mostrar() {
  whatsCard.classList.add('on');
}

function fecharWcard(e) {
  e.preventDefault();
  whatsCard.classList.remove('on');
}

setTimeout(mostrar, 6000);

btnWhatsCard.addEventListener('click', fecharWcard);
