const endPoint = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=4&playlistId=PLUWrUsax8OHzKFddCaSy58c8gvNCX0rZS&key=AIzaSyDGIzVDkT2QLE3NzcoTfgCJmuy708fcgoc';

const allVids = fetch(endPoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const allVids = myJson.items;
    const vidList = document.getElementById('video-caja');
    vidList.classList.add('js');
    vidList.innerHTML = `
    <a href="#fondo" class="saltar-contenido">Saltar videos</a>
      <button id="previo" aria-label="videoanterior" disabled="disabled">
      </button>
      <button id="siguiente" class="active" aria-label="siguientevideo">
      </button>
      <div id="vids">
      </div>
      <div class="botones-siguiente">
        <div class="boton-siguiente">
        </div>
        <div class="boton-siguiente">
        </div>
        <div class="boton-siguiente">
        </div>
        <div class="boton-siguiente">
        </div>
      </div>`;
    const vidDiv = document.getElementById('vids');
    const vids = allVids.map((vid) => {
      return`
      <h2 class="titulo-youtube" aria-label='${vid.snippet.title}' tabindex='-1'>${vid.snippet.title}</h2>
      <div class="vid">
      <iframe style="width:310px;height:285px" title='${vid.snippet.title}' src='https://www.youtube.com/embed/${vid.contentDetails.videoId}' class='youtube-iframe'></iframe>
      </div>`
    })
    vidDiv.innerHTML = vids.join('');
    carouselVideos();
  });

function carouselVideos(){

    //Definiciónes
    let primVid = true;
    let sigVid;
    let j;
    let prev = false;
    let tituloList = document.querySelectorAll('.titulo-youtube');
    let tituloArray = Array.from(tituloList);
    let botonesNodeList = document.querySelectorAll('.boton-siguiente');
    let botonesArray = Array.from(botonesNodeList);
    let vidNodeList = document.querySelectorAll('.vid');
    let vidArray = Array.from(vidNodeList);
    vidArray.map(x => x.classList.add('derecha'));
    let prevBoton = document.querySelector('#previo');
    let sigBoton = document.querySelector('#siguiente');

      function removeClass(el, className){
        el.classList.remove(className);
      }

      function ocultPrevVid(video){
          prev === true ? (
            video.classList.add('derecha'),
            setTimeout(removeClass, 300, video, 'visible')
          ) : (
            video.classList.add('izquierda'),
            setTimeout(removeClass, 300, video, 'visible')
          )
          prevBoton.classList.add('active');
          prevBoton.removeAttribute('disabled');
          j === 0 ? (
            prevBoton.classList.remove('active'),
            prevBoton.setAttribute('disabled', 'disabled')
          ) : null
      }

      function mostrarSeleccion(video){
          prev === true ? (
            video.classList.add('visible'),
            setTimeout(removeClass, 300, video, 'izquierda')
          ) : (
            video.classList.add('visible'),
            setTimeout(removeClass, 300, video, 'derecha')
          )
      }

      function mostrarPrimVid(){
        j = 0;
        primVid = false;
      }

      function definirJ(){
        prev === true ? (
          j === 0 ? null : j--
        ) : (
          j <= 2 ? j++ : null
        )
        j === 3 ? (
          sigBoton.classList.remove('active'),
          sigBoton.setAttribute('disabled', 'disabled')
        ) : (
          sigBoton.classList.add('active'),
          sigBoton.removeAttribute('disabled')
        )
      }

      function seleccion(){
        let k = (prev === true) ? j + 1 : j - 1;
        prevVid = vidArray[k];
        vidArray.map(x => {
          x === vidArray[j] ? mostrarSeleccion(x) :
            x === prevVid ?
            ocultPrevVid(prevVid) : null
        });
        botonesArray.map(x => {
          x === botonesArray[j] ?
          x.classList.add('oscuro') :
          x.classList.remove('oscuro');
        });
        tituloArray.map(x => {
          tituloArray.indexOf(x) === j ? (
            x.classList.add('visible'),
            x.setAttribute('id', 'test')
            ) : (
            x.classList.remove('visible'),
            x.removeAttribute('id', 'test')
            )
          })
          j > 0 ? document.getElementById("test").focus() : null;
      }

      function mostrarVid(e){
        primVid == true ?
          mostrarPrimVid() : (
            e.target.getAttribute('id') === 'siguiente' ? (
              prev = false,
              definirJ()
              ) : (
                prev = true,
                definirJ()
              )
            )
          seleccion();
        }

    //Event Listeners
    const siguiente = document.querySelector('#siguiente').addEventListener('click', mostrarVid);
    const previo = document.querySelector('#previo').addEventListener('click', mostrarVid);

    mostrarVid();
  }
