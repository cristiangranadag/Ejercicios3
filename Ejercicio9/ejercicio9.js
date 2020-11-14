/** 9.	Crear un algoritmo que le permita al usuario ingresar 3 números diferentes entre sí y el computador 
 * se los muestre en orden ascendente. */

 let n1;
 let n2;
 let m3;

 n1 = Number(prompt("Ingresa primero número "));
 n2 = Number(prompt("Ingresa segundo número "));
 n3 = Number(prompt("Ingresa tercero número "));

 if (n1 < n2 && n1 < n3) {
     if (n2 < n3) {
         alert(n1+', '+n2+', '+n3);
     } else {
         alert(n1+', '+n3+', '+n2);
     }
 } else if (n2 < n1 && n2 < n3) {
     if (n1 < n3) {
         alert(n2+', '+n1+', '+n3);  
     } else {
         alert(n2+', '+n3+', '+n1);
     }
 } else {
     if (n1 < n2) {
        alert(n3+', '+n1+', '+n2);
     } else {
        alert(n3+', '+n2+', '+n1);
     }
 }