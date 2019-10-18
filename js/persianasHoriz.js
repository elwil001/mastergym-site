const persianas = document.querySelectorAll('.galeria-contenido');

function mostrarPers(e) {
  const persTar = e.target;
  const persLi = persTar.parentNode;
  for(let sibling of persLi.parentNode.children){
    sibling.classList.remove('open');
    }
    persLi.classList.add('open');
  }

function mostrarPrimPers(e) {
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    persArray = Array.from(persianas);
    width < 800 ? persArray[1].classList.add('open') : null;
  }

mostrarPrimPers();

persianas.forEach(persiana => persiana.addEventListener('click', mostrarPers));
