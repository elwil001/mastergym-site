const logoLink = document.getElementById('logoLink');
const serviciosLink = document.getElementById('serviciosLink');
const somosLink = document.getElementById('somosLink');
const maquinas = document.getElementById('maquinasLink');
const menu = document.getElementById('serviciosMenu');
const boton = document.getElementById('serviciosBoton');
let j;

boton.addEventListener('click', function() {
  j === 1 ? (
    menu.classList.remove('abierto'),
    boton.classList.remove('abierto'),
    j = 0
  ) : (
    menu.classList.add('abierto'),
    boton.classList.add('abierto'),
    j = 1
  )
});

serviciosLink.addEventListener('focus', function() {
  menu.classList.add('abierto');
});

maquinasLink.addEventListener('focus', function() {
  menu.classList.add('abierto');
});

somosLink.addEventListener('focus', function() {
  menu.classList.remove('abierto');
});

logoLink.addEventListener('focus', function() {
  menu.classList.remove('abierto');
});
