/** 8.	Crear un algoritmo que le permita al usuario ingresar el nombre de un estudiante y las 4 notas que obtuvo 
 * en una materia y el computador le imprima el nombre, la nota definitiva y un mensaje que le indique si “GANA” O 
 * “PIERDE”. (LAS NOTAS SON DE 0 A 5.0, GANA SI LA NOTA ES MAYOR O IGUAL A 3.0 Y PIERDE SI ES MENOR A 3.0)
Necesitamos crear una variable Nombre para capturar el nombre del estudiante.
Necesitamos 4 variables de tipo real para las respectivas notas.
      Por último, creamos un variable para la nota definitiva.
 */

let nombre;
let nota1;
let nota2;
let nota3;
let nota4;
let definitiva;

nombre = prompt("El nombre de un estudiante: ");
nota1 = Number(prompt("Nota 1 de una materia"));
nota2 = Number(prompt("Nota 2 de una materia")); 
nota3 = Number(prompt("Nota 3 de una materia")); 
nota4 = Number(prompt("Nota 4 de una materia"));
definitiva = (nota1+nota2+nota3+nota4)/4

if (definitiva >= 3) {
    alert("GANA")
} else {
    alert("PIERDE")
}