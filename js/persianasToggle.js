const persianasAll = document.querySelectorAll('.banner-bloq-persianas');
const allArray = Array.from(persianasAll);

function addClass(){
  allArray.map(x => {
      x.classList.add('js');
      if(x.hasChildNodes()){
        x.classList.add('textos');
      } else {
        null;
      }
    }
  );
}

function toggleOpen(e) {
  this.classList.toggle('open');
}

addClass();

const persianatextos = document.querySelectorAll('.textos');
persianatextos.forEach(persianatexto => persianatexto.addEventListener('mouseover', toggleOpen));
persianatextos.forEach(persianatexto => persianatexto.addEventListener('mouseout', toggleOpen));
