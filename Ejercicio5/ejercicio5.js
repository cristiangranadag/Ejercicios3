/** 5.	Elaborar un algoritmo donde el usuario ingrese la placa de un bus, el número de pasajeros transportados 
 * y la ruta donde prestó el servicio (A o B) el computador le debe mostrar el dinero que recolectó sabiendo 
 * que en la ruta A el pasaje es a $1.200 y en la B a $1.000. */

 let placa1;
 let nroPasajero1;
 const valPasaje1 = 1200;
 const valPasaje2 = 1000;
 let din1;
 let ruta;

 ruta = prompt("Cual es la ruta? A o B? ");
 placa1 = prompt("Placa del bus: ");
 nroPasajero1 = Number(prompt("Numero de pasajeros de "+placa1+":"));


 if (ruta == 'A' || ruta == 'a') {
     din1 = valPasaje1 * nroPasajero1;
     document.write("El Total: "+din1+", Ruta A: "+valPasaje1)
 } else {
    din1 = valPasaje2 * nroPasajero1;
    document.write("El Total: "+din1+", Ruta B: "+valPasaje2)
 }
