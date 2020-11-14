/** 3.	Elabore un algoritmo que lea el nombre, el salario bruto, las deducciones y las bonificaciones de 
 *  dos trabajadores, e imprima (escriba un mensaje) el nombre del que más salario neto tiene.
 */

 let nom1;
 let nom2;
 let bruto1;
 let bruto2;
 let dedu1;
 let dedu2;
 let boni1;
 let boni2;
 let neto1;
 let neto2;

 nom1 = prompt("Ingresa nombre del trabajador 1: ");
 bruto1 = Number(prompt("Ingresa bruto del trabajador 1: "))
 boni1 = Number(prompt("Ingresa las bonificaciones 1: "))
 dedu1 = Number(prompt("Ingresa las deducciones 1: "))
 nom2 = prompt("Ingresa nombre del trabajador 2: ");
 bruto2 = Number(prompt("Ingresa bruto del trabajador 2: "))
 boni2 = Number(prompt("Ingresa las bonificaciones 2: "))
 dedu2 = Number(prompt("Ingresa las deducciones 2: "))

 neto1 = bruto1 + boni1 - dedu1;
 neto2 = bruto2 + boni2 - dedu2;

 if (neto1 > neto2) {
     document.write(nom1+" mas salario neto");
     document.write(", el salario bruto: "+neto1);
     document.write(", la deduccion: "+dedu1);
     document.write(" y la bonificacion: "+boni1);
 } else {
    document.write(nom2+" mas salario neto");
    document.write(", el salario bruto: "+neto2);
    document.write(", la deduccion: "+dedu2);
    document.write(" y la bonificacion: "+boni2);
 }