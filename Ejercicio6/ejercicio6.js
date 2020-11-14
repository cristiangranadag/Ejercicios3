/** 6.	Crear un algoritmo que le permita al usuario ingresar el tipo de trabajador (FIJO o TEMPORAL) y con base 
 * en esto pueda imprimir el nombre y el salario neto, sabiendo que si es FIJO debe leer el nombre, el número 
 * de horas trabajadas, el salario básico hora, el total de deducciones y el total de bonificaciones 
 * y si es TEMPORAL solo debe leer el nombre y el número de horas trabajadas; estos trabajadores tienen 
 * un salario básico hora fijo de $6.000 y no tienen deducciones ni bonificaciones. */

let nombre;
let neto;
let hrs;
let basico;
let deducciones;
let bonificaciones;
let tipo;   

tipo = prompt("Ingresar el tipo de trabajador: FIJO o TEMPORAL ");

if (tipo == 'FIJO') {
    nombre = prompt("Ingresar el nombre del trabajador: ");
    hrs = Number(prompt("Ingresar el número de horas trabajadas: "));
    basico = Number(prompt("Ingrear el salario basico hora: "));
    deducciones = Number(prompt("Ingresar el total de deducciones: "));
    bonificaciones = Number(prompt("Ingresar el total de bonificaciones: "));
    neto = (basico*hrs) + bonificaciones - deducciones;
} else {
   nombre = prompt("Ingresar el nombre del trabajador: ");
   hrs = Number(prompt("Ingresar el número de horas trabajadas: "));
   neto = 6000 * hrs;
}

document.write("Trabajador: "+nombre+", el salario neto: "+neto);
