

import readLine from "readline";

class Alumno{

    _expediente; 

    getexpediente() {
        return this._expediente;
    }
    setexpediente(value) {
        this._expediente = value;
    }


    _alumno; 
    getalumno() {
        return this._alumno;
    }
    setalumno(value) {
        this._alumno = value;
    }
    _notaMedia; 
    getnotaMedia() {
        return this._notaMedia;
    }
    setnotaMedia(value) {
        this._notaMedia = value;
    }

    _Asignaturas_Notas = new Map(); 
    getAsignaturas_Notas() {
        return this._Asignaturas_Notas;
    }
    setAsignaturas_Notas(value) {
        this._Asignaturas_Notas = value;
    }


  

    constructor(expediente, alumno, asignaturasNotas) {
        this._expediente = expediente;
        this._alumno = alumno;
        this._Asignaturas_Notas = asignaturasNotas;
        this._notaMedia = this.calcularNotaMedia(); // calcular la nota media al crear el alumno
    }



    static async altaAlumno(clase) {

        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const preguntarNombre = () => {
            return new Promise((resolve) => {
                rl.question('¿Introduce el nombre del Alumno? ', (nombre) => {
                    // Aseguramos que el nombre se guarde con la primera inicial en mayúscula.
                    let nombreAlumno = nombre.split(" ");
                    let nuevoFormato = ""; // Inicializar la variable correctamente

                    for (let item of nombreAlumno) {
                        let inicial = item.charAt(0); // Obtener la inicial
                        let mayus = inicial.toUpperCase(); // Pasar a mayúsculas
                        let nombreFormateado = item.replace(item.charAt(0), mayus); // Reemplazar el valor original por el valor convertido
                        nuevoFormato += `${nombreFormateado} `; //creamos el string con el array creado
                    }

                    let nombreFormateado = nuevoFormato.trim(); // Eliminar los espacios sobrantes
                    resolve(nombreFormateado);
                    rl.close();
                });
            });
        };

        let nombreFormateado = await preguntarNombre();

        // Sacamos un nuevo expediente
        let ultimoExp = clase.length > 0 ? clase[clase.length - 1].getexpediente() : 0;
        let newExpediente = ultimoExp + 1;

        // Crear nuevo alumno con el nombre formateado
        let newAlumno = new Alumno(newExpediente, nombreFormateado, new Map([["matematicas", 0], ["lengua", 0], ["ingles", 0]]));

        // Guardamos la longitud anterior de la clase
        let oldLeng = clase.length;

        // Añadimos el nuevo alumno a la clase
        clase.push(newAlumno);

        // Verificamos si el alumno fue añadido correctamente
        if (clase.length === oldLeng + 1) {
            console.log("Alumno añadido a la clase con éxito");
        } else {
            console.log("Error, el alumno no ha sido agregado a la clase");

        }
    }


    static buscarAlumno(alumno, clase){

        if(! Array.isArray(clase)){
            console.log("Error el parametro introducido no es un array"); 
            return; 
        }

        let encontrado = false; 


        //pueden buscar  un alumno por nombre o por numero de expediente

        if(isNaN(alumno)){

            //si han introducido el nombre entonces buscamos por nombre
      
   
                for(let i = 0; i < clase.length; i++){

                    let nombreArray = clase[i].getalumno(); 

                    if(nombreArray.toLowerCase() == alumno.toLowerCase()){
                        encontrado = true; 
                        return i;
                    }

                }


                
        }else{ //buscar por expediente

                        //si han introducido el nombre entonces buscamos por nombre
                        for(let i = 0; i < clase.length; i++){
                            let expediente = clase[i].getexpediente(); 
                            if(expediente  == alumno){
                                encontrado = true; 
                                return i;    
                            }
        
                        }
        }

        if(!encontrado) console.log("El alumno No se encuentra en el array"); 

    }


    static bajaAlumno(alumno, clase){

       
        let longitudOriginal = clase.length; //tomamos la logitud original

        //elimnamos por posicion
        let posicion = Alumno.buscarAlumno(alumno, clase); //busca nombre o expediente y retorna la posicion de este objeto

        clase.splice(posicion, 1); //elimina al alumno
        //comprobamos que lo eliminado
        if((longitudOriginal - 1)  === clase.length ) console.log("Alumno " + alumno + " eliminado correctamente"); 

                       
     }

                

          


    


    static cambiarNota(clase, alumno, asignatura, nota){

      
       const posicion = Alumno.buscarAlumno(alumno, clase); 

      if(! isNaN(asignatura)) {
        console.log("Error: asinatura debe de terner formato string"); 
      }else{
        asignatura = asignatura.toLowerCase(); 
      }


      if(nota > 10 || nota < 0){
        console.log("Error nota debe de comprender entre 0 y 10"); 
        return; 
      }

     let notas = new Map(clase[posicion].getAsignaturas_Notas()); //creamos una copia de las notas de ese alumno y luego lo modificamos 
     notas.set(asignatura , nota); //usamos la clase asignatura para modificar el valor original. como no permite duplicado lo que hace es cambiar el valor de esa llave

     console.log("NOTAS ACTUALES: ......"); 
     console.log(clase[posicion].getAsignaturas_Notas()); 

    clase[posicion].setAsignaturas_Notas(notas); 

    console.log("NOTAS DESPUES DEL CAMBIO DE NOTAS: ......"); 
    console.log(clase[posicion].getAsignaturas_Notas()); 
      
    }


    //necesario para destructing
     obtener = ()=> {

        let noras = new Map(); 
    return{
        expediente : this.getexpediente(),
        nombreAlumno : this.getalumno(),
        notas: this.getAsignaturas_Notas()
    }
    }



    static mostrarAlumnosDestucting(clase){

     
        for(var objeto of clase){
            const {expediente, nombreAlumno, ...otrosDatos} = objeto.obtener();
            console.log(`Expediente: ${expediente}, Nombre: ${nombreAlumno}, Asignaturas y Notas:`, otrosDatos);
        }


    }



    calcularNotaMedia(){

        let suma = 0; 
        
        let notas = this.getAsignaturas_Notas(); 

    
        
        for(var [key, values] of notas){

            suma += values;
        }

       let promedio = suma / notas.size;

       return Math.round(promedio); 
    }


    static calcularPromedioClase(){

        let notasMedias = []; 
        let sumaNotas = 0; 
        let promedio = 0; 
        let superan = 0; 
        let inferiores = 0;
       
    

        //asignamos las notas Medias, y las transladamos a un array a todas
        clase.forEach((item, i) => {

            let mediaIndividual = item.calcularNotaMedia();  
            notasMedias.push(mediaIndividual); 

            
    }); 

   
        for(var item of notasMedias){
                sumaNotas += item; 
            
        }

        if(notasMedias.length !== 0){

            promedio = sumaNotas / notasMedias.length; 
            console.log("La nota promedio de la clase es "+promedio); 

        }else console.log("Error: division por 0 al calcular el promedio"); 


        let maxima = Math.max(...notasMedias); //asi se saca el max y min cuando es array
        let minima = Math.min(... notasMedias); 

        
        console.log("La nota minima es:  "+minima+ " -->  La nota maxima es: "+maxima); 
     

        for(let item of clase){

            if(item.getnotaMedia() === maxima){
                console.log("La nota maxima es "+maxima+ " y pertenece a "+item.getalumno());
                superan++;  
                

            }else if(item.getnotaMedia() === minima){
                console.log("La nota minima es "+minima+ " y pertenece a "+item.getalumno()); 
                inferiores++; 

            }else{

                if(item.getnotaMedia() >= promedio){
                    superan++;
                }else{
                    inferiores++; 
                }

            }
            
        }
        console.log("EL total de alumnos que superan la media es "+superan); 
        console.log("EL total de alumnos que No superan la media es "+inferiores); 

    }

    calcularPromedioClaseAsignatura(){
         //sacar el mejor y el peor alumno
        //los que superen el promedio y los que no

    }


   


}



let clase = [
    new Alumno(100, "Manuel", new Map([["matematicas", 8], ["lengua", 5], ["ingles", 7]])),
    new Alumno(101, "Ana", new Map([["matematicas", 9], ["lengua", 6], ["ingles", 8]])),
    new Alumno(102, "Luis", new Map([["matematicas", 7], ["lengua", 7], ["ingles", 6]])),
    new Alumno(103, "Maria", new Map([["matematicas", 8], ["lengua", 9], ["ingles", 7]])),
    new Alumno(104, "Pedro", new Map([["matematicas", 6], ["lengua", 5], ["ingles", 8]]))
];


//Alumno.altaAlumno(clase); 
//Alumno.bajaAlumno("MANUEL", clase); 
//Alumno.bajaAlumno("100", clase); 

//Alumno.cambiarNota(clase, "Manuel", "ingles", 10); 

//Alumno.mostrarAlumnosDestucting(clase); 

Alumno.calcularPromedioClase(); 


