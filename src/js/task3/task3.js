import './task3.css';
import createItem from './createItem';
const ToDoList = require('./toDoList').default;

const refs = {
  resBtnRef: document.querySelectorAll('.delete'),
  divRef: document.querySelector('.items'),
  formFef: document.querySelector('#form'),
};

const toDo = new ToDoList(refs.divRef);

if (localStorage.getItem('elements')) { 
  let savedMarkup = localStorage.getItem('elements').split(' ');
  let newMarkup = savedMarkup.map((item) => createItem(item));
  refs.divRef.append(...newMarkup)

  toDo.items = newMarkup
}


refs.formFef.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const data = new FormData(form);

  toDo.addItem(data.get('text'));
}

refs.divRef.addEventListener('click', e => {
  if (e.target.classList.contains('delete'))
    toDo.removeItem(e.target.parentElement);
});
