const b1= document.getElementById("b1");
const b2= document.getElementById("b2");
const b3= document.getElementById("b3");

let count=0;

alert("Welcome to a simple counter program!");

b1.onclick = function(){
    count++;
    l1.textContent = count;
}

b2.onclick = function(){
    count = 0;
    l1.textContent = count;
}

b3.onclick = function(){
    count--;
    l1.textContent = count;
}