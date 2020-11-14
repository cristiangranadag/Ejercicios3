/** 4.	Crear un algoritmo que le permita al usuario ingresar los datos de dos buses así: Placa, 
 * El número de pasajeros transportado y el valor del pasaje, y el computador le muestre la placa 
 * del bus que más dinero recogió. */

 let placa1;
 let nroPasajero1;
 let valPasaje1;
 let dinero1;
 let placa2;
 let nroPasajero2;
 let valPasaje2;
 let dinero2;

 placa1 = (prompt("Placa de bus: "));
 nroPasajero1 = Number(prompt("Número de pasajeros de "+placa1+": "));
 valPasaje1 = Number(prompt("Valor del pasaje "+placa1+": "));
 placa2 = (prompt("Placa de otro bus: "));
 nroPasajero2 = Number(prompt("Número de pasajeros de "+placa2+": "));
 valPasaje2 = Number(prompt("Valor del pasaje "+placa2+": "));
 dinero1=valPasaje1*nroPasajero1;
 dinero2=valPasaje2*nroPasajero2;
 if (dinero1 > dinero2) {
     document.write(placa1+" mas dinero recogió")
     document.write(" y total: "+dinero1)
 } else {
    document.write(placa2+" mas dinero recogió")
    document.write(" y total: "+dinero2)
 }