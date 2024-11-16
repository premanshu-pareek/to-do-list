const searchBar = document.getElementById("search-input");
const toDoContainer = document.getElementById("todo-list-container");

function addTask() {
  if(searchBar.value === "") {
    alert("Add something first")
  } else {
    const li = document.createElement("LI");
    li.textContent = searchBar.value;
    toDoContainer.appendChild(li);
  }

  searchBar.value = "";
}

toDoContainer.addEventListener("click", function(e) {
  if(e.target.tagName == "LI") {
    e.target.classList.toggle("checked")
  }
})