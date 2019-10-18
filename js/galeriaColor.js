const galeriaImagenes = document.querySelectorAll('.blocks-gallery-item');
const galeria = document.getElementsByTagName('body')[0];

function addClass(el, nombre){
  el.classList.add(nombre);
}

galeria.onscroll = function(){
  galeriaImagenes.forEach(imagen => {
      const imagenFondo = imagen.offsetTop - imagen.offsetHeight;
      const visible = window.scrollY > imagenFondo;
      visible ? setTimeout(addClass, 300, imagen, 'visible') : null;
  });
}
