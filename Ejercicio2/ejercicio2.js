/** 2.	Elaborar un algoritmo que muestre un mensaje según la edad ingresada; niño (menor de 10 años), 
 * preadolescente (entre 10 y 15 años), un adolescente (entre 15 y 18 años), adulto (entre 18 y 50 años), 
 * adulto mayor (mayor de 50 años). */

 let edad;

 edad = parseInt(prompt("Ingresa la edad de persona: "));

 if (edad <= 10) { 
     document.write("Es un niño")
 } else if (edad > 10 && edad <= 15) {
     document.write("Es un preadolescente")
 } else if (edad > 15 && edad <= 18) {
     document.write("Es un adolescente")
 } else if (edad > 18 && edad <= 50) {
     document.write("Es adulto")
 } else {
     document.write("Es un adulto mayor")
 }