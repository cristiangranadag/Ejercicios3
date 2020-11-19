/** 13.	Elaborar un programa que le permita a un usuario ingresar el nombre de un trabajador, el número de horas 
 *      trabajadas y valor hora, se pide que el programa le imprima el salario bruto, las bonificaciones, 
 *      las deducciones y el salario neto; teniendo en cuenta que las bonificaciones serán de $20.000 si trabajó 
 *      como máximo 48 horas, de $50.000 si trabajo entre 49 y 58 horas y de $100.000 si trabajó más de 58 horas. 
 *      Las deducciones son de $10.000 si el salario básico hora es menor de $5.000, de $20.000 si el salario básico 
 *      hora es mayor de $5.000 y menor de $8.000 y de $ 50.000 si su salario básico hora es de $8.000 o más. */

 let nombre;
 let horas;
 let valor;
 let bruto;
 let boni;
 let dedu;
 let neto;

 nombre = prompt("Nombre del trabajador:");
 horas = Number(prompt("Número de horas trabajadas:"));
 valor = Number(prompt("Valor hora:"));
 bruto = valor * horas;
 if (horas <= 48) {
     boni = 20000;
 } else if (horas >= 49 && horas <= 58){
     boni = 50000;
 } else {
     boni = 100000;
 }

 if (valor < 5000) {
     dedu = 10000;
 } else if (valor >= 5000 && valor < 8000) {
     dedu = 20000;
 } else {
     dedu = 50000;
 }

 neto = bruto + boni - dedu;
 document.write("El salario bruto: "+bruto);
 document.write(", las bonificaciones: "+boni);
 document.write(", las deducciones: "+dedu);
 document.write(" y el salario neto: "+neto);