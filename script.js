const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert('Write what to do!')
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}

// listContainer.addEventListener("click", function(e){
//     e.target.parentElement.remove()
// }, false);

listContainer.addEventListener("click", function(e){
    e.target.tagName=='LI'?e.target.classList.toggle('checked'):e.target.parentElement.remove()
}, false);



// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }

// showTask()