(() => {
    // stub
    let toDoList = document.querySelector(".todo-list"),
        addButton = document.getElementById("addToDo"),
        saveButton = document.getElementById("saveToDo");

    function addToDo() {
        // add a todo to the list
        let newListItem = `
        <li>
            <span contentEditable>Add ToDo Here</span>
            <button>Done</button>
        </li>`;
        debugger;

        toDoList.innerHTML += newListItem;
    }

    function saveToDo() {
        // save our todos to LocalStorage
        debugger;

        // get the LI items in my UL (the ToDo list)

        let toDoListItems = toDoList.innerHTML;

        debugger;

        if (window.localStorage) {
            localStorage.setItem("toDoList", toDoListItems);
        }
    }

    function retrieveToDos() {
        if (localStorage && localStorage.getItem("toDoList")) {
            let myToDos = localStorage.getItem("toDoList");

            toDoList.innerHTML += myToDos;
        }
    }

    // get our locally stored todo list if it exists
    retrieveToDos();

    addButton.addEventListener("click", addToDo);
    saveButton.addEventListener("click", saveToDo);
})();