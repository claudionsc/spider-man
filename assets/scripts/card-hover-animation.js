function handleMouseEnter() { //função para atribuir classe ao elemento e id do elemento ao body quando o mouse está em co=ima
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}
;
function handleMouseLeave() { //função para remover classe do elemento e id do body quando o mouse estiver em cima
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCard() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false);

