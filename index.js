const searchBar = document.getElementById("search-input");
const toDoContainer = document.getElementById("todo-list-container");

function addTask() {
  if(searchBar.value === "") {
    alert("Add something first")
  } else {
    const li = document.createElement("LI");
    li.textContent = searchBar.value;
    toDoContainer.appendChild(li);

    const span = document.createElement("SPAN");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  searchBar.value = "";
  saveData();
}

toDoContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveData();
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
})

function saveData() {
  localStorage.setItem("data", toDoContainer.innerHTML);
}

function showTask() {
  toDoContainer.innerHTML = localStorage.getItem("data")
}

showTask();