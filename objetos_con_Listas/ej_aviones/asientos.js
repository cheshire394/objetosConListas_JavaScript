
export class Asientos{

   
    
    constructor(numero) {
        this.numero = numero; 
        this.libre = true; // El asiento está libre por defecto
        this.dniPasajero = null; // No hay DNI asociado por defecto

    }


  static crearAsientos(){

        
        const Arr_asientos= [];  
       
        let numero = 1;

        for(var i = 0; i < 2; i++ ){

                Arr_asientos.push(new Asientos(numero));
                numero++; 
            }

       return Arr_asientos; 
    }

    getLibre() {
        return this.libre;
    }
    setLibre(value) {
        this.libre = value;
    }
     
    getNumero() {
        return this.numero;
    }
    setNumero(value) {
        this.numero = value;
    }

    getDniPasajero() {
        return this.dniPasajero;
    }
    setDniPasajero(value) {
        this.dniPasajero = value;
    }




   
}





