const menuBar = document.querySelector('button.menu-bar');
menuBar.firstElementChild.classList.add('fa-bars');
const topNavList = menuBar.nextElementSibling.children;

for (let i = 0; i < topNavList.length; i++) {
  topNavList[i].addEventListener('click', () => {
    menuBar.firstElementChild.classList.remove('fa-house');
    menuBar.firstElementChild.classList.add('fa-bars');
    menuBar.nextElementSibling.style.transition = 'transform 0s';
    menuBar.nextElementSibling.style.transform = 'translateX(-100vw)';
  })
}


function menuSlide(e) {
  if (menuBar.firstElementChild.classList.contains('fa-house')) {
    menuBar.firstElementChild.classList.remove('fa-house');
    menuBar.firstElementChild.classList.add('fa-bars');
    menuBar.nextElementSibling.style.transform = 'translateX(-100vw)';
    menuBar.style.textShadow = '5px 5px 2px #000';
    menuBar.style.transition = 'text-shadow 0.5s';

  } else {
      menuBar.firstElementChild.classList.remove('fa-bars');
      menuBar.firstElementChild.classList.add('fa-house');
      menuBar.nextElementSibling.style.transform = 'translateX(0)';
      menuBar.style.textShadow = 'none';
      menuBar.style.transition = 'text-shadow 0s';

  }
}


