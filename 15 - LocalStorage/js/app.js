  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
      //console.log(e);
      //console.log('Hello');
      e.preventDefault();
      //console.log(this);
      const text = (this.querySelector('[name=item]')).value;
      //console.log(text);
      const item = {
          text: text,
          done: false
      };
      //console.log(item);
      items.push(item);
      //console.table(items);
      populateList(items, itemsList);
      localStorage.setItem('items', JSON.stringify(items));
      // Reset input      
      this.reset();
  }

  function populateList(plates = [], platesList) {
      platesList.innerHTML = plates.map((plate, i) => {
          return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
      }).join('');
  }

  function toggleDone(e) {
      if (!e.target.matches('input[type="checkbox"]')) {
          return; // Skip this unless it's an input
      }
      //console.log(e.target);
      const el = e.target;
      //console.log(el.dataset);
      const index = el.dataset.index;
      items[index].done = !items[index].done;
      localStorage.setItem('items', JSON.stringify(items));
      populateList(items, itemsList);
  }

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone)

  populateList(items, itemsList);