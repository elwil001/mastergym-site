function showPopUp(){
  const popUp = document.querySelector('#popUp');
  const overlay = document.querySelector('#overlay');
  const popUpFocus = popUp.querySelector('a[href]');
  const header = document.querySelector('#logo');
  const modalNodes = Array.from(document.querySelectorAll('#popUp *'));
  modalNodes.push(popUp);
  const nonModalNodes1 = Array.from(document.querySelectorAll('body *'));
  verCookie('shown=');

  function nuevoCookie(nombre, valor, dias){
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias*24*60*60*1000));
    const vencimiento = "expires="+fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + vencimiento;
  }

  function verCookie(nombre){
    let existe = document.cookie.indexOf(nombre);
    if(existe === 0){
      return;
      } else {
        nuevoCookie('shown', 'true', 365);
        modalServicios();
      }
  };

  function modalServicios(){
    popUp.classList.add('abierto');
    overlay.classList.add('abierto');
    modalNodes.map((nodem) => {
      nonModalNodes1.map((noden) => {
        if(nodem === noden){
          i = nonModalNodes1.indexOf(noden);
          delete nonModalNodes1[i];
        }
      })
    })

    nonModalNodes1.map(node => {
      node.setAttribute('tabindex', -1);
      node.setAttribute('aria-hidden', 'true');
      node.style.outline ='none';
    })

    popUpFocus.focus();
  }

  function closeModal(){
    popUp.classList.remove('abierto');
    overlay.classList.remove('abierto');
    nonModalNodes1.map(node => {
      node.removeAttribute('tabindex', -1);
      node.removeAttribute('aria-hidden', 'true');
      node.style.outline ='none';
    });
    header.focus();
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' || e.key === 'Esc'){
      closeModal();
    }
  })
  popUpFocus.addEventListener('click', closeModal);
}
