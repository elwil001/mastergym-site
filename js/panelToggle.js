const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));
panels.forEach(panel => panel.addEventListener('mouseout', toggleOpen));
