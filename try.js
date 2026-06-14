const btn = document.getElementById("button");
const input = document.getElementById("input-box");
const list = document.getElementById("list");
// TO add something in the list
btn.addEventListener("click", add);
function add(){
    if(input.value===""){
        alert("Write something");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    save();
    }
   input.value = "";
}
// For checked and remove
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});


// To save something in the list
function save(){
    localStorage.setItem("data", list.innerHTML);

// TO show something in the list
}
function show(){
    list.innerHTML = localStorage.getItem("data");
}
 show();