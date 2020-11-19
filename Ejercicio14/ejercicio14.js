/** 14.	Para la materia de Destrezas se determinó con los estudiantes que, si la nota del primer quiz 
 *      era menor que la del segundo, se sustituía la primera nota por la segunda. La tercera y cuarta nota 
 *      no se modifican. Elabore un algoritmo que le permita al profesor ingresar las 4 notas que obtuvo un alumno 
 *      y el computador le muestre la nota definitiva y la calificación cualitativa que es: “E” si es mayor 
 *      o igual a 4.5, “S” si es mayor o igual a 4.0 y menor de 4.5, “B” si es mayor o igual a 3.5 y menor de 4.0, 
 *      “A” si es mayor o igual a 3.0  y menor de 3.5, “D” si es mayor o igual a 2.0 y menor de 3.0  “I” si es 
 *      menor de 2.0. */

 let n1;
 let n2;
 let n3;
 let n4;
 let nota;

 n1 = Number(prompt("Ingresa primera nota: "));
 n2 = Number(prompt("Ingresa segunda nota: "));
 n3 = Number(prompt("Ingresa tercera nota: "));
 n4 = Number(prompt("Ingresa cuarta nota: "));

 if (n1 < n2) {
     n1 = n2;
 }

 nota = (n1 + n2 + n3 + n4)/4;
 if (nota >= 4.5) {
     alert("E y "+nota);
 } else if(nota >= 4.0 && nota < 4.5) {
     alert("S y "+nota)
 } else if(nota >= 3.5 && nota < 4.0) {
    alert("B y "+nota)
} else if(nota >= 3.0 && nota < 3.5) {
    alert("A y "+nota)
} else if(nota >= 2.0 && nota < 3.5) {
    alert("D y "+nota)
} else {
    alert("I y "+nota)
}