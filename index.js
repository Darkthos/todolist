// 변수선언
const lists = document.querySelector("#todo-list"); // OL태그
const input = document.querySelector("#input-text"); // 입력창
const add = document.querySelector(".add"); // 추가 버튼
const reset = document.querySelector(".reset"); // 리셋 버튼

let data;
let arr = [];

const addtext = () => {
  const listbox = document.createElement("div");
  const checkbox = document.createElement("input");
  const li = document.createElement("li");
  const span = document.createElement("button");
  lists.appendChild(listbox); // 한 문단
  listbox.appendChild(checkbox); // 체크 박스
  listbox.appendChild(li); // 텍스트
  listbox.appendChild(span); // delete 박스
  todoItem = input.value;
  li.textContent = todoItem;
  checkbox.setAttribute("type", "checkbox");
  listbox.classList.add("listbox");
  span.classList.add("deleter");
  data = {
    text: todoItem,
    id: crypto.randomUUID(),
  };
  saveData();
  input.value = "";
};

const printData = (todoObj, todoObjArr) => {
  const listbox = document.createElement("div");
  const checkbox = document.createElement("input");
  const li = document.createElement("li");
  const span = document.createElement("button");
  lists.appendChild(listbox); // 한 문단
  listbox.appendChild(checkbox); // 체크 박스
  listbox.appendChild(li); // 텍스트
  listbox.appendChild(span); // delete 박스
  li.textContent = todoObj.text;
  checkbox.setAttribute("type", "checkbox");
  listbox.classList.add("listbox");
  span.classList.add("deleter");
};

const saveData = () => {
  arr.push(data);
  localStorage.setItem("arr", JSON.stringify(arr));
};

const loadData = JSON.parse(localStorage.getItem("arr"));
if (loadData) {
  arr = loadData;
  arr.forEach((element, _, elementArr) => {
    printData(element, elementArr);
  });
}

const keytext = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addtext();
  }
};
// 체크박스 클릭시 체크

const resettext = () => {
  lists.innerHTML = ""; // lists.children.remove()은 유사배열이라 안됫어
  localStorage.removeItem("arr");
};

const itDelete = (e) => {
  if (e.target.classList.contains("deleter")) {
    const todoText = e.target.parentElement.querySelector("li").textContent;
    e.target.parentElement.remove();

    // Remove from localStorage
    arr = arr.filter((todoObj) => todoObj.text !== todoText);
    localStorage.setItem("arr", JSON.stringify(arr));
  }
};
//     // const filteredData = arr.filter((originalTodoObj) => originalTodoObj.id !== todoObj.id);
//     // console.log(filteredData);
//     // arr = filteredData;
//     // saveData();

add.addEventListener("click", addtext);
input.addEventListener("keypress", keytext);
reset.addEventListener("click", resettext);
document.addEventListener("click", itDelete);

// 저장 객체

//스토리지..
