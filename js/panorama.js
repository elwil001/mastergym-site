function panMaquinas(){
  const pan = document.getElementById('panoramaVentana');
  const botonIzquierda = document.getElementById('izquierda');
  const botonDerecha = document.getElementById('derecha');
  const panCaja = document.getElementById('panorama');
  let porcentaje;

  panCaja.classList.add('visible');

  function calcularPorcentaje(){
    porcentaje = 50;
  }

  function moverPan(e){
    e.target.getAttribute('id') === 'izquierda' ? (
        porcentaje === 0 ? null : porcentaje = porcentaje - 10
        )  : (
        porcentaje === 100 ? null : porcentaje = porcentaje + 10
        )
      pan.setAttribute('style', `background-position: ${porcentaje}% 0`);
      if(porcentaje === 0) {
        botonIzquierda.classList.add('inactive');
        botonIzquierda.setAttribute('disabled', 'disabled');
      } else if (porcentaje === 100) {
        botonDerecha.classList.add('inactive');
        botonDerecha.setAttribute('disabled', 'disabled');
      } else {
        botonIzquierda.classList.remove('inactive');
        botonIzquierda.removeAttribute('disabled', 'disabled');
        botonDerecha.classList.remove('inactive');
        botonDerecha.removeAttribute('disabled', 'disabled');
      }
  }

  botonDerecha.addEventListener('click', moverPan);
  botonIzquierda.addEventListener('click', moverPan);
  calcularPorcentaje();
}

panMaquinas();
