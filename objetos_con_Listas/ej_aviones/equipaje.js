


export class extras{



    #asietoVip; 
    #unidadesMaletas; 
    #kilosMaletas = []; 
    #descuento; 

    constructor() {
        this._asientoVip = false; // Valor inicial, puedes cambiarlo si es necesario
        this._unidadesMaletas = 0; // Valor inicial, puedes cambiarlo si es necesario
        this._kilosMaletas = []; // Lista vacía inicial
        this._descuento = 0.0; // Valor inicial, puedes cambiarlo si es necesario
    }



//getter y settter
 // Getter y Setter para asientoVip
 get asientoVip() {
    return this._asientoVip;
}

set asientoVip(value) {
    this._asientoVip = value;
}

// Getter y Setter para unidadesMaletas
get unidadesMaletas() {
    return this._unidadesMaletas;
}

set unidadesMaletas(value) {
    this._unidadesMaletas = value;
}

// Getter y Setter para kilosMaletas
get kilosMaletas() {
    return this._kilosMaletas;
}

set kilosMaletas(value) {
    if (Array.isArray(value)) {
        this._kilosMaletas = value;
    } else {
        throw new Error("kilosMaletas debe ser un arreglo");
    }
}

// Getter y Setter para descuento
get descuento() {
    return this._descuento;
}



}



 
    
