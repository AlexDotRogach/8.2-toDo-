function createItem(text) {
  const elem = document.createElement('div');
  elem.classList.add('item');
  elem.innerHTML = `
      <div class="text">${text}</div>
      <button class="delete">remove</button>
      `;
  return elem;
}

export default createItem;
