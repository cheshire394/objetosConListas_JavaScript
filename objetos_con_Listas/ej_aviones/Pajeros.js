import readLine from "readline"; 
import { Asientos } from "./asientos.js";
import { Vuelos } from "./vuelos.js";
import { resolve } from "path";

export class Pasajeros{

    menor; 
    getMenor() {
        return this.menor;
    }
    setMenor(value) {
        this.menor = value;
    }

    edad; 

    getEdad() {
        return this.edad;
    }
    setEdad(value) {
        this.edad = value;
    }
    nacimiento; 
    getNacimiento() {
        return this.nacimiento;
    }
    setNacimiento(value) {
        this.acimiento = value;
    }

    nombre; 
    getNombre() {
        return this.nombre;
    }
    setNombre(value) {
        this.nombre = value;
    }

    dni; 
    getDni() {
        return this.dni;
    }
    setDni(value) {
        this.dni = value;
    }

    id_vuelo; 
    getId_vuelo() {
        return this.id_vuelo;
    }
    setId_vuelo(value) {
        this.id_vuelo = value;
    }
    asiento; 
    getAsiento() {
        return this.asiento;
    }
    setAsiento(value) {
        this.asiento = value;
    }

   

    constructor(id_vuelo,asiento,  dni, nombre, nacimiento, ){

        this.id_vuelo = id_vuelo; 
        this.asiento = asiento; 
        this.dni = dni; 
        this.nombre = nombre, 
        this.nacimiento = new Date(nacimiento);
        this.edad = this.calcularEdad(nacimiento); 

        if(this.getEdad < 18) this.menor = true; 
        else this.menor = false; 

        
    }


    calcularEdad(fech_nacimiento){

        const sysdate = new Date(); 
       
        const nacimiento = new Date(fech_nacimiento);

       //sacamos los años
       let edad = sysdate.getFullYear() - nacimiento.getFullYear(); 
    let mes = sysdate.getMonth() - nacimiento.getMonth(); 

    console.log(mes); 
       
    //si el mes es menor a 0 quiere decir que faltan esos meses para tu cumpleaños, directamente restamos
    //si ademas justo esta en 0 quiere decir que ese mes es tu cumple y  tenemos que comprobar los dia que quedan.
       if( mes < 0 || (mes === 0 && sysdate.getDate() < nacimiento.getDate())){
            edad--; 
       }
       
       return edad; 
    }

    asignarAsiento(vuelo){

          //utilizamos el mismo metodo que mostraba los asientos libres 
        //para crear un array y compararlo con el asiento que quiere el pasajero
        let asientosLibres = []; 
        asientosLibres = vuelo.mostrarAsientosLibres(); 

        if(asientosLibres.length == 0) {
            console.log("No quedan asientos disponibles para este vuelo"); 
            return; //salimos del metodo
        }

        

        let encontrado = false;
        let objAsiento; //almacenara el asiento en caso de encontrarlo 

        let asientoSolicitado = this.getAsiento();
        let dniPasajero = this.getDni(); 
        
      

       
       

        for(var i = 0; i < asientosLibres.length; i++){

            if(asientosLibres[i].getNumero() == asientoSolicitado){

                this.setAsiento(asientosLibres[i]); //atributo de esta clase

                //atributos de la clase asiento
                asientosLibres[i].setLibre(false); 
                asientosLibres[i].setDniPasajero(dniPasajero); 
                encontrado = true; 

                console.log("Asiento asignado correctamente, mostramos los detalles: "); 
                console.log(asientosLibres[i]); 

            }

        }

        //si el asiento que queria el usuario no esta libre, entonces asignamos el asiento más cercano al que queria
        if(!encontrado){

            console.log("Asiento solicitado no disponible, asignamos el mas cercano "); 

            let primerAsiento = asientosLibres[0].getNumero(); 
            let distanciaPrimero = Math.abs(primerAsiento - asientoSolicitado); 

            for(var i = 0;i < asientosLibres.length; i++){

                let distanciaActual = asientosLibres[i].getNumero(); 

                if(distanciaActual < distanciaPrimero){
                    distanciaPrimero = distanciaActual; // corremos un asiento en el bucle
                    asientoSolicitado = asientosLibres[i]; 
                    
                }
            }

            asientoSolicitado.setLibre(false); 
            asientoSolicitado.setDniPasajero(dniPasajero); 
            console.log(asientoSolicitado); 
            this.setAsiento(asientoSolicitado); //asignamos ese asiento al pasajero

           
            



        }

      
       
      

    }


    devolverBillete(vuelo){

      let dni = this.getDni(); 
      let encontrado = false; 

      let asientos = []; 
      asientos = vuelo.getAsientos();

      for(var i = 0; i < asientos.length; i++){
     
        if(asientos[i].getDniPasajero() === dni){
            asientos[i].setLibre(true); 
            asientos[i].setDniPasajero(null); 
            this.setAsiento(-1); 
            console.log("Billete devuelto correctacmente"); 
            encontrado = true; 
          
        }

      }

      if(!encontrado)console.log("No se ha encontrado ningun dni asignado a este vuelo"); 


    }

    //funcion asicronas...espera la respuesta para ejecutar el codigo
    pedirNumeroAsiento() {

        
        return new Promise((resolve) => {
            
            const rl = readLine.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            const preguntarNumero = () => {

              
                rl.question('Introduce un número de asiento:   ', (numero) => {
                    numero = parseInt(numero);

                    // Si es un número válido
                    if (isFinite(numero)) {
                        rl.close();
                        resolve(numero);
                    } else {
                        console.log('Error, se esperaba un valor numérico');
                        preguntarNumero(); // Volver a pedir el número
                    }
                });
            };

            preguntarNumero();
        });
    }

    async cambiarAsiento(vuelo) {
        this.devolverBillete(vuelo);

        //funcion asycrona pedir numero
        try {
            
            const numeroAsiento = await this.pedirNumeroAsiento();
            this.setAsiento(numeroAsiento); // Asigna el asiento
        } catch (error) {
            console.error('Error al asignar el asiento:', error);
        }

        this.asignarAsiento(vuelo); 
    }

   
}

    
  

        

        


    
 







