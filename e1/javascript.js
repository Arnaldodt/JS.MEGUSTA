let count = 3;

let elemento = document.querySelector("#like");
console.log(elemento);

function add(){
    count++;
    elemento.innerText = count + " like(s)"

}