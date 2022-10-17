let count1 = 9;
let count2 = 12;
let count3 = 9;

let elemento1 = document.querySelector("#like1");
let elemento2 = document.querySelector("#like2");
let elemento3 = document.querySelector("#like3");

function add1(){
    count1++;
    elemento1.innerText = count1 + " like(s)"
}

function add2(){
    count2++;
    elemento2.innerText = count2 + " like(s)"
}

function add3(){
    count3++;
    elemento3.innerText = count3 + " like(s)"
}