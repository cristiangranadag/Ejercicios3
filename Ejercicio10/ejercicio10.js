/** 10.	Se tiene un código, número de artículos vendidos y el valor del artículo con ese código. Calcule el valor 
 * de la compra, teniendo en cuenta lo siguiente: si la compra es de 50 o más artículos se le da al cliente 10% 
 * de descuento; si la compra es menor de 50 artículos no se hace descuento. Mostrar el código, el total de 
 * la compra y el valor del descuento. */

 let cod;
 let nro;
 let val;
 let des;
 let tol;
 let pre;

 cod = prompt("Código:");
 nro = Number(prompt("Número de artículo:"))
 val = Number(prompt("El valor del artículo:"))

 pre = nro * val;

 if (nro >= 50 ) {
     des = pre * 0.1
     tol = pre - des;
 } else {
     des = 0;
     tol = pre;
 }

 document.write("El codigo: "+cod+", el total de la compra: "+tol+" y el valor del descuento: "+des)