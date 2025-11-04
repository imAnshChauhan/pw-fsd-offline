let h1 = document.getElementById("title");
// h1.style.color = "yellow";

let boxes = document.getElementsByClassName("box");

for(let eachBox of boxes) {
    eachBox.style.background = "red";
}

let arr = document.getElementsByTagName("p");

arr[0].textContent = "Document Object Model";