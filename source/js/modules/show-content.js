const mobileContent = document.querySelector('.about__hidden-content--mobile');
const desktopContent = document.querySelector('.about__hidden-content--desktop');
const button = document.querySelector('.about__btn');

const MIN_WINDTH = 767;

let content;

if (window.innerWidth <= MIN_WINDTH) {
  content = mobileContent;
} else {
  content = desktopContent;
}

content.classList.add('about__hidden-content--hidden');

const onClickShowContent = () => {
  if (content.classList.contains('about__hidden-content--hidden')) {
    content.classList.remove('about__hidden-content--hidden');
    button.textContent = 'Свернуть'
  } else {
    content.classList.add('about__hidden-content--hidden');
    button.textContent = 'Показать'
  }
}

button.addEventListener('click', onClickShowContent);
