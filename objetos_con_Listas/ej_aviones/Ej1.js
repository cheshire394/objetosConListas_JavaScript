

/*Ejercicio 1
Crea la interfaz Lista que define distintas operaciones con una lista de
objetos:
● putInicio: se le pasará un objeto genérico de la clase Object y lo
añadirá al inicio de la lista. No devuelve nada.
● putFinal: se le pasará un objeto genérico de la clase Object y lo
añadirá al final de la lista. No devuelve nada.
● popPrincipio: obtiene y elimina el primer objeto de la lista.
Devuelve dicho objeto.
● popFinal: obtiene y elimina el último elemento de la lista. Devuelve
dicho elemento.
● getAt: se le pasa como parámetro una posición y obtiene y elimina
el elemento que ocupa dicha posición. Devuelve dicho elemento.
● count: devuelve el número de objetos de la lista.*/ 

class Object{


  
        putFinal(item, lista) {

        // type of solo es valido para determinar los tipos de string, int, float, pero no es valido 
        //para estructuras dinamicas
        let tipo = Object.prototype.toString.call(lista); 


       switch(tipo) {

        case "[object Array]": if(Array.isArray(lista)){
                                lista.push(item); //añadimos al final del array
        }
        
                                break; 
                                

        case "[object Set]": lista.add(item); 
                            break; 
                              

        case "[object Map]": lista.set(item[0], item[1]); 
                            break; 
                
        default: console.log("El parametro lista no corresponde a una lista"); 
                                break; 

       }                    
        
    }


    putInicio(item, lista){

        let tipo = Object.prototype.toString.call(lista); 


        switch(tipo){

            case "[object Array]": if(Array.isArray(lista)){
                lista.unshift(item); //añadimos al principio del array
}

                break; 
                

case "[object Set]": //los set no tienene un metodo directo para agregar elementos al principio
               let conversionArr=  Array.from(lista);
               conversionArr.unshift(item);
               lista = new Set(conversionArr) //conversion de nuevo a set 
                return lista;
              

case "[object Map]": let nuevoMap = new Map(); 
                nuevoMap.set(item[0], item[1]); 
            
                lista.forEach((valor, clave) => {

                    nuevoMap.set(clave, valor); 


                }); 
            return nuevoMap; 



      

            
default: console.log("El parametro lista no corresponde a una lista"); 
                break; 

        }
    }


popPrincipio(item, lista){
   
    let tipo = Object.prototype.toString.call(lista); 

switch(tipo){


    case "[object Array]": if(Array.isArray(lista)){
        lista.shift(); //eliminamos el primer item
}

        break; 
        

case "[object Set]": lista.delete(item); 
    break; 
      

case "[object Map]": lista.delete(item); 
    break; 

default: console.log("El parametro lista no corresponde a una lista"); 
        break; 

}
}


popFinal(item, lista){

    let tipo = Object.prototype.toString.call(lista); 

    switch(tipo){
    
    
        case "[object Array]": if(Array.isArray(lista)){
            lista.pop(); //eliminamos el primer item
    }
    
            break; 
            
    
    case "[object Set]": lista.delete(item); 
        break; 
          
    
    case "[object Map]": lista.delete(item); 
        break; 
    
    default: console.log("El parametro lista no corresponde a una lista"); 
            break; 
    
    }

}


buscarItem(buscado, lista){


    let tipo = Object.prototype.toString.call(lista); 

    switch(tipo){
    
    
        case "[object Array]": if(Array.isArray(lista)){
            

            if(lista.includes(buscado)){

                let posicion = lista.indexOf(buscado); 
                lista.splice(posicion,1); //en esta posición elimina un elemento

                return posicion; 
            }else console.log("Elemento no encontrado en el array"); 


            }
    
            case "[object Set]":
                let obtener = false; 
                if(lista.has(buscado)) obtener = true; 
                lista.delete(buscado);
            
                return obtener; 
             
                    break; 
                  
            
            case "[object Map]": 
                    let obtenerValor = lista.get(buscado); 
                    lista.delete(buscado); 
                    return obtenerValor; 
                break; 
        
        default: console.log("El parametro lista no corresponde a una lista"); 
                break; 
        
        }


        
}









}

let miObjeto = new Object(); 
// Definición correcta de arrays
let miArray = [1, 2, 3, 4, 5];


// Definición correcta de un Set
let miSet = new Set([1, 2, 3, 4, 5]);


// Definición correcta de un Map
let miMap = new Map([[1, "uno"],[2, "dos"],[3, "tres"], [4, "cuatro"], [5, "cinco"]]);


//AÑADIR ELEMENTOS AL PRINCIPIP Y AL FINAL

miObjeto.putInicio(0, miArray); 
miObjeto.putFinal(6, miArray); 
console.log(miArray); 

miSet= miObjeto.putInicio(0, miSet); 
miObjeto.putFinal(6, miSet); 
console.log(miSet); 

miMap = miObjeto.putInicio([0, 'cero'], miMap);
miObjeto.putFinal([6, "seis"], miMap); 
console.log(miMap); 


//ELIMINAR ELEMENTOS AL PRINCIPIO Y AL FINAL; 
console.log("Eliminamos elementos     "); 

miObjeto.popPrincipio(0, miArray);  //aqui da igual xq item es ignorado en array
miObjeto.popPrincipio(0, miSet);
miObjeto.popPrincipio(0, miMap);

miObjeto.popFinal(0, miArray); //aqui da igual xq item es ignorado en array
miObjeto.popFinal(miSet.size, miSet);
miObjeto.popFinal(miMap.size, miMap);//aqui podemos usar el tamaño porque justo las claves van en orden, sino sería inválido.

console.log(miArray); 
console.log(miSet); 
console.log(miMap); 


//OBTENER Y ELIMINAR UN ELEMENTO DE CUALQUIER POSICION

let obtener;

obtener= miObjeto.buscarItem(3, miArray); 
console.log("El elemento se encuenta en la posicion : "+obtener); 
console.log("El elemento ha sido eliminado con splice "+ miArray); 

console.log(); 

obtener= miObjeto.buscarItem(3, miSet); 
console.log("El elemento se encuenta en el set : "+obtener); 
console.log("El elemento ha sido eliminado con delete() "); 
console.log(miSet); 

console.log(); 

obtener= miObjeto.buscarItem(3, miMap); 
console.log("el valor de la clave es : "+obtener); 
console.log("El elemento ha sido eliminado con delete() "); 
console.log(miMap); 


console.log(); 
//contador de objetos
let contador; 

contador = miArray.length; 
console.log("El arra contiene "+contador+ " objetos"); 

contador = miSet.size;
console.log("El set contiene "+contador+ " objetos"); 

contador = miMap.size; 
console.log("El map contiene "+contador+ " objetos"); 


