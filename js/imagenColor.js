const imagenes = document.querySelectorAll('.imagen');
const cuerpo = document.getElementsByTagName('body')[0];

function addClass(el, nombre){
  el.classList.add(nombre);
}

cuerpo.onscroll = function(){
  imagenes.forEach(imagen => {
      const imagenFondo = imagen.offsetTop - imagen.offsetHeight;
      const visible = window.scrollY > imagenFondo;
      visible ? setTimeout(addClass, 300, imagen, 'visible') : null;
  });
}
