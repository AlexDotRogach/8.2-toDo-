import './task3.css';
const ToDoList = require('./toDoList').default;

const refs = {
  resBtnRef: document.querySelectorAll('.delete'),
  divRef: document.querySelector('.items'),
  formFef: document.querySelector('#form'),
};

const toDo = new ToDoList(refs.divRef);

refs.formFef.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const data = new FormData(form);

  console.log(toDo.addItem(data.get('text')));
}

refs.divRef.addEventListener('click', e => {
  if (e.target.classList.contains('delete'))
    toDo.removeItem(e.target.parentElement);
});
