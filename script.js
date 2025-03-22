let input = document.getElementById("todo-input");
let taskButton = document.getElementById("add-task-btn");
let list = document.getElementById("todo-list");

// taskButton.addEventListener("click",function () {
//     if (input.value === "") {
//         alert("you must type something ")
//     }else{
//         let li = document.createElement("li")
//         li.innerHTML = input.value;
//         list.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span)
//     }
//     input.value = " ";
//     saveData()
// })

taskButton.addEventListener("click", function () {
    if (input.value === "") {
        alert("You must type something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;



        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Multiplication sign (×) as delete icon
        li.appendChild(span);
    }
    input.value = "";
    saveData();
});

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Removes the entire <li>, not just <span>
        saveData();
    }
}, false);



function saveData() {
    localStorage.setItem("data",list.innerHTML)
    
}

function showData() {
    list.innerHTML = localStorage.getItem("data")
}

showData()