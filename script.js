const clear = document.getElementById("clear-btn");
const save = document.getElementById("save-btn");

save.addEventListener("click", displayName);
clear.addEventListener("click", clearName);

//To execute the save action
function displayName(event) {
  let formData = document.getElementById("username").value;
  localStorage.setItem("username", formData);
  event.preventDefault();
  console.log(formData);
}

//To keep local storage value accessible
function refresh() {
  let data = window.localStorage.getItem("username");
  console.log(data);
  document.getElementById("display-name").innerHTML = data;
}

refresh();

//clear display and remove saved name from localStorage

function clearName() {
  localStorage.removeItem(username);
  localStorage.clear();
}
