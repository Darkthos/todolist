// Load saved items from localStorage
window.onload = function () {
  loadItems();
};

//add item to list
function addItem() {
  let input = document.getElementById("input-text");
  let text = input.value.trim();

  if (text !== "") {
    let list = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    // Save item to localStorage
    saveItems();

    // Clear input field
    input.value = "";
  }
}

//reset the list
function resetList() {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  // Clear items from localStorage
  localStorage.removeItem("todoItems");
}

// save items to localStorage
function saveItems() {
  let list = document.getElementById("todo-list");
  let items = list.getElementsByTagName("li");
  let itemList = [];

  for (let i = 0; i < items.length; i++) {
    itemList.push(items[i].textContent);
  }

  localStorage.setItem("todoItems", JSON.stringify(itemList));
}

// load items from localStorage
function loadItems() {
  let list = document.getElementById("todo-list");
  let itemList = JSON.parse(localStorage.getItem("todoItems"));

  if (itemList) {
    for (let i = 0; i < itemList.length; i++) {
      let li = document.createElement("li");
      li.textContent = itemList[i];
      list.appendChild(li);
    }
  }
}
