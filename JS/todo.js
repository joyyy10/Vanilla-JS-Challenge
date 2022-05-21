const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.style.backgroundColor = "transparent";
    button.style.marginLeft = "10px";
    button.style.fontSize = "large";
    button.style.border = "1px solid";
    button.style.borderRadius = "50%";
    li.appendChild(span);
    li.appendChild(button);
    li.style.listStyle = "none";
    span.innerText = newTodo.text;
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

 
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string�� savedToDos�� array�� ����
    toDos = parsedToDos; // ���ΰ�ħ �ص� ��������
    //parsedToDos.forEach((item) => console.log("turn of ",item)); -> arrow function 
    parsedToDos.forEach(paintToDo); //paintToDo parameter �ȿ� �ڵ����� ���� �迭 ������� �־���
}