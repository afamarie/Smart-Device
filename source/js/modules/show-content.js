const content = document.querySelector('.about__hidden-content');
const button = document.querySelector('.about__btn');

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
