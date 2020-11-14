/** 1.	Elabore un algoritmo que permita averiguar cuál es el nombre del mayor de 2 hermanos no gemelos. 
 * Como datos de entrada se tiene el nombre y la edad de las 2 personas.
Análisis del problema:
 */

let nom1;
let nom2;
let edad1;
let edad2;


nom1 = prompt("Cual es tu nombre? ");
edad1 = Number(prompt("Cuantos años tienes? "))
nom2 = prompt("Cual es nombre de tu hermano(a)? ");
edad2 = Number(prompt("Cuantos años tiene tu hermano(a)? "))


if (edad1 > edad2) {
    document.write(nom1+" es hermano(a) mayor y tiene "+edad1+" años");
} else {
    document.write(nom2+" es hermano(a) mayor y tiene "+edad2+" años");
}

