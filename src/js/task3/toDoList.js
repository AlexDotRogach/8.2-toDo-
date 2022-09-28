import createItem from './createItem';

class ToDoList {
  #items = [];

  constructor(parent) {
    this.parent = parent;
  }

  addItem(text) {
    if (text.length === 0) return 'nothing';
    //check the same
    for (const item of this.#items) {
      if (item.children[0].textContent === text)
        return 'this value is in the list';
    }
    localStorage.clear();
    this.#items.push(createItem(text));

    this.render();

    return 'add';
  }


  removeItem(deleteElem) {
    this.#items.splice(this.#items.indexOf(deleteElem), 1);
    this.render();
  }

  render() {
    this.parent.innerHTML = '';
    if (this.#items.length === 0) return 'nothing';

    localStorage.clear()
    let newArr = [...this.#items].map((item) =>  item.children[0].textContent)
  
    localStorage.setItem('elements', newArr.join(' '))

    this.#items.forEach(item => {
      this.parent.append(item);
    });
  }

  set items(arr) { 
    if(Array.isArray(arr)) {
      this.#items = [...arr];
    }
  } 
}

export default ToDoList;
