const menuBar = document.querySelector('button.menu-bar');
menuBar.firstElementChild.classList.add('fa-bars');


function menuSlide(e) {
  console.log(menuBar.firstElementChild.className);
  if (menuBar.firstElementChild.classList.contains('fa-house')) {
      menuBar.firstElementChild.classList.remove('fa-house');
      menuBar.firstElementChild.classList.add('fa-bars');
      menuBar.nextElementSibling.style.display = 'none';
  } else {
    menuBar.firstElementChild.classList.remove('fa-bars');
    menuBar.firstElementChild.classList.add('fa-house');
    menuBar.nextElementSibling.style.display = 'flex';
  }
}