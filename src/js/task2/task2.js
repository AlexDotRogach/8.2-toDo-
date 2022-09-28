import './task2.css';

// Зробити так, щоб при кліку на div у якого є атрибут data-order
// змінював колір. Реалізувати механізм, який буде зберігати
// стан нашого дива і при перезапуску сторінки зберігати колір.

let elementsState = {};

const divAll = document.querySelectorAll('[data-order]'); 
// console.log(localStorage.getItem('elements'))
if (localStorage.getItem('elements')) {
  elementsState = {...JSON.parse(localStorage.getItem('elements'))};
  divAll.forEach(div => {
    if (elementsState.hasOwnProperty(div.getAttribute('data-order'))) {
      div.style.backgroundColor = elementsState[div.getAttribute('data-order')]
    }
  })
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.querySelector('.container');

div.addEventListener('click', clickContainer);

function clickContainer(e) {
  e.target.getAttribute('data-order');
  if (e.target.getAttribute('data-order')) {
    e.target.style.backgroundColor = getRandomHexColor();
    saveColor(e.target)
    console.log(elementsState)
  }
};

function saveColor(element) {
  elementsState[element.getAttribute('data-order')] = element.style.backgroundColor;
  localStorage.setItem('elements', JSON.stringify(elementsState))
  
}
