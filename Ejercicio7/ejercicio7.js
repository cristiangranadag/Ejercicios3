/* 7.	Elaborar Un algoritmo que le permita al usuario leer 3 número diferentes entre sí y el computador 
le imprima el mayor de ellos.*/

let num1;
let num2;
let num3;
let mayor;

num1 = Number(prompt("Leer número 1: "));
num2 = Number(prompt("Leer número 2: "));
num3 = Number(prompt("Leer número 3: "));

if (num1 > num2 && num1 > num2) {
    alert("El número 1: "+num1);
} else if(num2 > num1 && num2 > num3) {
    alert("El número 2: "+num2);
} else {
    alert("El número 3: "+num3);
}