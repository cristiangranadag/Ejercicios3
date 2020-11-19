/** 12.	Se tienen el área, el valor del metro cuadrado de una propiedad y la forma de pago de la cuota inicial. 
 *      Se pide calcular el precio de venta de la propiedad y el valor de la cuota inicial, que sería el 20% 
 *      del valor del precio de venta. Si la forma de pago es 1, se otorga un descuento del 10% sobre la cuota inicial 
 *      y si la forma de pago es 2, se le recarga un 8% en el valor de la misma. Mostrar el valor del precio de venta 
 *      y el de la cuota inicial de la propiedad (solo hay 2 formas de pago). */

 let area;
 let cmV;
 let forma;
 let precio;
 let cuoIni;
 let cuoIni2;
 
 area = Number(prompt("Ingresa número de área"));
 cmV = Number(prompt("Ingresa valor del metro cuadrado"));
 forma = Number(prompt("Ingresa forma de pago (1 ó 2)"));
 precio = area * cmV;
 cuoIni = precio*.2;
 if (forma == 1) {
    cuoIni2 = cuoIni - cuoIni *.1;
    document.write("El precio de venta: "+precio+", la cuota inicial es $"+cuoIni2);
 } else {
     cuoIni2 = cuoIni + cuoIni * .08;
     document.write("El precio de venta: "+precio+", la cuota inicial es $"+cuoIni2);
 }