// when hamburger menu is clicked, add class of show-nav to the container element and rotate circle to show the close button

const container = document.querySelector('.container');
const circle = document.querySelector('.circle');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

function showNav() {
  container.classList.add('show-nav');
  circle.style.transform = 'rotate(-' + 70 + 'deg)';
}

function hideNav() {
  container.classList.remove('show-nav');
  circle.style.removeProperty('transform');
}

openButton.onclick = showNav;
closeButton.onclick = hideNav;