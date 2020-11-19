/** 11.	Se necesita un programa que diga si una persona es apta para un equipo de baloncesto o no, para que sea apto 
 * debe cumplir que si es hombre sea mayor de edad, que mida más de 1.70 mts., que pese menos de 75 kg., 
 * o si es mujer que tenga más de 16 años, que mida como mínimo 1.70 y que pese como máximo 60 kg. Se debe leer 
 * el nombre, el sexo (F = femenino, M = masculino), la edad, la estatura y el peso. */

 let nombre;
 let sexo = 'F';
 let edad;
 let estatura;
 let peso;

 nombre = prompt("Ingresa nombre: ");
 sexo = prompt("Ingresa el sexo: F o M ");
 edad = Number(prompt("Ingresa la edad: "));
 estatura = Number(prompt("Ingresa la estatura: "));
 peso = Number(prompt("Ingresa el peso: "));

 if (sexo == 'F') {
    if (edad >= 16 && estatura >= 1.70 && peso <= 60) {
        document.write("Programa dice si va al equipo de baloncesto")
    } else {
        document.write("Programa dice no va al equipo de baloncesto")
    }
 } else {
     if (edad >= 18 && estatura >= 1.70 && peso <= 75) {
        document.write("Programa dice si va al equipo de baloncesto")
    } else {
        document.write("Programa dice no va al equipo de baloncesto")
    }
 }

