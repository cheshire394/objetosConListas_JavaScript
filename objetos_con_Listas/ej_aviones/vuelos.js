
import { Asientos } from "./asientos.js";
export class Vuelos{

    asientos = []; 
    id_vuelo; 


    origen; 
    destino; 
    salida; 
    llegada; 
    km; 


    constructor(precioBase, origen, destino, salida, llegada, km){

        this.precioBase = precioBase; 
        this.asientos = Asientos.crearAsientos(); //CREA UN ARRAY DE OBJETOS DE TIPO ASIENTO.
        this.origen = origen; 
        this.destino = destino; 
        this.salida = new Date(salida);  
        this.llegada = new Date(llegada); 
        this.km = km; 
        this.id_vuelo = this.asignarId_vuelo(); 


            if(this.llegada >= this.salida){
                throw new Error("La fecha de llegada no puede ser inferior a la de salida"); 

            }

            if(this.origen === this.destino){
                throw new Error("El origen no puede ser el mismo que el destino"); 
            }

            if(this.km < 250){
                throw new Error("No realizamos viajes tan cortos"); 
            }

    }

    asignarId_vuelo(){

        let salida = this.getSalida(); 
        const fech_salida = new Date(salida); 
        

        let mes = fech_salida.getMonth() + 1; 
       
        let meses = new Map([[1 ,"ENE"],[2 , "FEB"],[3,"MAR"],[4, "ABR"],[5,"MAY"],[6, "JUN"],
        [7, "JUL"],[8, "AGO"],[9,"SEP"],[10, "OCT"],[11, "NOV"],[12, "DIC"]]);

        let mesValor = meses.get(mes); 
        

        //pasamos a letra el numero
        let dia = fech_salida.getDate(); 
        dia = dia.toString(); 

         let id = mesValor.concat(dia); 

        var origen = this.getOrigen();
        origen = origen.toUpperCase(); 
        let id_org = origen.substr(0,3); 

        var destino = this.getDestino(); 
        destino = destino.toUpperCase(); 
        let id_des = destino.substr(0,3); 

        //devoler 3 primera iniciales de origen en mayus + mes + dia + tres primera inciiales de destino en mayus
            return (id_org.concat("/"+id)).concat("/"+id_des).trim(); 

    }


    mostrarAsientosLibres() {

        let libres = []; 
        //asientos en una array de la clase vuelo, pero asiento es un objeto de la clase ASIENTO
        this.asientos.forEach(asiento => {

          
            if (asiento.getLibre()) {
                libres.push(asiento); 
                
            }
        });
        
        
        return libres; 
    }

    mostrarAsientos() {

        //asientos en una array de la clase vuelo, pero asiento es un objeto de la clase ASIENTO
        this.asientos.forEach(asiento => {

            console.log(asiento); 
          
          
        });
    
    }



    



    
    // Getters
    getAsientos() {
        return this.asientos;
    }

    getIdVuelo() {
        return this.id_vuelo;
    }

  

    getOrigen() {
        return this.origen;
    }

    getDestino() {
        return this.destino;
    }

    getSalida() {
        return this.salida;
    }

    getLlegada() {
        return this.llegada;
    }

    getKm() {
        return this.km;
    }

    // Setters
    setAsientos(asientos) {
        this.asientos = asientos;
    }

    setIdVuelo(id_vuelo) {
        this.id_vuelo = id_vuelo;
    }

 

    setOrigen(origen) {
        this.origen = origen;
    }

    setDestino(destino) {
        this.destino = destino;
    }

    setSalida(salida) {
        this.salida = salida;
    }

    setLlegada(llegada) {
        this.llegada = llegada;
    }

    setKm(km) {
        this.km = km;
    }
}









