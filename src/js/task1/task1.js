import './task1.css';

// Є 2 input, перший відповідає за ключ об'єкта інший за значення.
// Зробіть так, щоб у консоль виводився об'єкт після відправки,
// використовуй json parce. Приклад формату json: '{"key":"sad","value":"asd"}'
const formEl = document.querySelector('#form')
formEl.addEventListener('submit', onsubmit)

function onsubmit (evt) {
    evt.preventDefault();
  
   const elements = evt.target.elements

console.log(JSON.parse(`{"key":"${elements.key.value}","value":"${elements.value.value}"}`))
evt.currentTarget.reset();
}