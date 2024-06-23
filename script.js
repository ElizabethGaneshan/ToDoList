// const inputBox = document.getElementById("input-box");

// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     //   creating a list with tag name called as "li" and storing that in a variable called as li
//     let li = document.createElement("li");
//     //   the variable li will contain the values given in the input
//     li.innerHTML = inputBox.value;
//     //then we will make it display in the list
//     listContainer.appendChild(li);

//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
// }
const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
