import readLine from "readline"; 
import { Pasajeros } from "./Pajeros.js";
import {Vuelos} from "./vuelos.js"; 
import { extras } from "./equipaje.js";
                                                    //salida               //llegada
let vuelo1 = new Vuelos("Madrid", "Barcelona", "2024-07-24T14:00:00", "2024-07-29T18:00:00", 400); 
let id_vuelo = vuelo1.getIdVuelo(); 


//vuelo1.mostrarAsientosLibres(); 


//id_vuelo,asiento,  dni, nombre, nacimiento,
let pasajero1 = new Pasajeros(id_vuelo, 99, "5746487575-J","Alina",   "06-25-1995"); 
let pasajero2 = new Pasajeros(id_vuelo, 99, "7656477555-J", "Marta", "07-19-1996"); 
let pasajero3 = new Pasajeros(id_vuelo, 99, "7656477555-J", "Marta", "07-19-1996"); 


//pasajero1.asignarAsiento(vuelo1); 
//pasajero2.asignarAsiento(vuelo1); 
//pasajero3.asignarAsiento(vuelo1); 
//pasajero1.cambiarAsiento(vuelo1); 





 



