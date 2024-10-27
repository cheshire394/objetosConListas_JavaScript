
import { realpath } from "fs";
import { createConnection } from "net";
import readLine from "readline";  //importamos la interfaz realLine

/*1. Realiza un programa que rellene un array de 10 enteros con los 10
        primeros números pares. A continuación, muestra el contenido del array.
         */


function rellenarArrayPares(tamanio) {

    let array = []; //  inicialemnte es 0
    let numero;

    do {

        numero = Math.floor(Math.random() * 10) + 1;

        if (numero % 2 == 0 && !array.includes(numero)) {

            array.push(numero);

        }

    } while (array.length < tamanio);

    return array;


}

/*import { constants } from "buffer";
import { Console } from "console";
import { realpath, truncate } from "fs";
import { stdout } from "process";*/

//let array = rellenarArrayPares(4); 
//console.log(array); 


/*2.Realiza un programa que lea desde teclado 10 números y posteriormente
        muestre solamente los que sean pares.
        */

function rellenarArrayConsola(tamanio) {
    let array = [];

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let pregunta = (i) => {
        rl.question(`Escribe un número para la posición ${i}: `, (numero) => {
            array.push(parseInt(numero));
            if (i < tamanio - 1) {
                pregunta(i + 1);
            } else {
                rl.close();
                console.log("Array rellenado:", array);
            }
        });
    };

    pregunta(0);
}


//let array = rellenarArrayConsola(5);
//console.log(array); 

/*
     * 3. Realiza un programa que rellene un array de 10 enteros con 10 números
     * aleatorios entre 1 y 100 (ambos incluidos). A continuación, muestra el mínimo
     * y máximo número almacenado en el array. Nota: Para generar números
     * aleatorios, investiga sobre la clase Random
     */


function descubrirNumeros(){
    let numeros = []; 
    let max = Number.MIN_VALUE; 
    let min = Number.MAX_VALUE; 
    for(var i = 0; i < 10; i++){
        let num = (Math.round(Math.random()* 100 -1)+1); 
        
        if(num > max) max = num; 
        if (num < min) min = num; 
        numeros.push(num); 

        
    }
    console.log("El numero maximo es "+max); 
    console.log("El numero minimo es "+min); 

    numeros.forEach((item, i) => {
        if(item === max) console.log("La posicion del número máximo es: "+i);  
        if(item === min) console.log("La posicion del numero minimo es: "+ i); 
        
    });

    
    return numeros; 

}
//console.log("El array generado es "+ descubrirNumeros()); 



/*4. Realiza un programa que lea desde teclado 10 números enteros, para
    posteriormente mostrarlos en el orden inverso al que fueron
    introducidos.*/


function arrayReverso() {

    let arrayNumeros = [];
    console.log(arrayNumeros.length);
    let contador = 0;

    const rl = readLine.createInterface({

        input: process.stdin,
        output: process.stdout

    });

    let pregunta = (i) => {

        rl.question(`Escribe un numero a la posicion ${i} : `, (numero) => {
            arrayNumeros.push(parseInt(numero));
            contador++;

            if (contador == 3) {
                console.log(arrayNumeros.reverse());
                rl.close();
            } else {
                pregunta(i + 1);
            }
        });



    }
    pregunta(0);

}

//arrayReverso();

/*5. Rellena un array de 100 casillas con números aleatorios comprendidos
entre 1 y 100 (ambos incluidos). Muestra posteriormente los valores
almacenados en las casillas impares del array.
*/


function arrayCasillasImpar() {

    let arrayNumeros = [];
    let casillasImpar = [];

    for (var i = 0; i < 10; i++) {

        let numero = Math.floor(Math.random() * 100) + 1;
        arrayNumeros.push(numero);

        if (i % 2 != 0) casillasImpar.push(numero);

    }
    console.log("array completo: " + arrayNumeros);
    console.log("Array casillas impares " + casillasImpar);

}

//arrayCasillasImpar();

/*6.Solicita las 10 notas con decimales de los alumnos de una clase. Calcula y
muestra la nota media obtenida por el grupo. Muestra después cuántos
alumnos tienen una nota superior o igual a la media.
*/


function notas() {
    var notas = [];
    const tamanio = 3;
    let contadorSup = 0;
    var promedio = 0;


    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let pregunta = (i) => {

        rl.question(`Escibre la nota numero: ${i} `, (nota) => {


            notas.push(parseFloat(nota));

            promedio += parseFloat(nota);

            if (i === tamanio) {

                console.log("Las notas introducidas son: " + notas);



                if (tamanio != 0) promedio = promedio / tamanio;
                console.log("La nota promedio es " + Math.round(promedio));

                for (nota of notas) {
                    if (nota >= promedio) contadorSup++;
                }

                console.log("El total de alumnos que igualan o superan la media es: " + contadorSup);
                rl.close();

            } else pregunta(i + 1);

        });




    }
    pregunta(1);

}

 //notas(); 


/* 7. Rellena un array de 100 casillas con números aleatorios comprendidos
entre 1 y 100 (ambos incluidos). Posteriormente pide un valor al usuario
comprendido entre 1 y 100 (insiste en la lectura del valor hasta que el
número sea válido y esté comprendido entre 1 y 100) y muestra en
pantalla si el valor dado aparece en el array o no, y si aparece indica en
qué posiciones del array aparece.
*/


//creamos la variable 
function contiene() {
    let numeros = [];

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Llenamos el array una sola vez fuera de la función pregunta
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 10) + 1;
        numeros.push(num);
    }

    let pregunta = () => {
        rl.question('Escribe un numero del 1 al 10: ', (numero) => {
            numero = parseInt(numero);

            if (numeros.includes(numero)) {
                numeros.forEach((valor, index) => {

                    if (valor === numero) console.log("El número " + valor + " se ubica en la posición: " + (index + 1) + " del array");

                });
            } else {
                console.log("El número introducido no se ubica en el array ");
            }

            console.log("Array números aleatorios: " + numeros);
            rl.close();
        });
    };

    pregunta();
}

// contiene();


/*8. Dado un array de 10 casillas relleno con números aleatorios
 comprendidos entre 1 y 10 (ambos incluidos).
 a. Muestra su contenido en una línea de pantalla.
 b. Intercambia el valor de la primera casilla con el valor de la
 última casilla
 c. Muestra el contenido actual del array en una línea de
 pantalla.*/


function intercambio() {

    let numeros = [];
    for (var i = 0; i < 10; i++) {

        let numero = Math.floor(Math.random() * 10) + 1;
        numeros.push(numero);
    }

    console.log("Array original: " + numeros);

    let primero = numeros[0];
    let ultimo = numeros[numeros.length - 1];

    numeros[0] = ultimo;
    numeros[numeros.length - 1] = primero;

    console.log("Array con posiciones intercambiadas: " + numeros);

}

//  intercambio();

/*9. Rellena un array con el resultado del cálculo del factorial de los números
del 1 al 20 y muestra posteriormente su contenido en pantalla.
NOTA: En una variable de tipo int no cabe el factorial de 20*/
// recuerda que el factorial es la multiplicacion de los resultados de la multiplicacion
//de un número desde si mismo hasta 1.

//damos el valor al parametro "numero" para que nos calcule el resultado de los factoriales
// del 1 al 20.


function factorial() {
    let factorial = [];
    var resultado = 1;


    for (let i = 1; i <= 5; i++) {
        resultado = resultado * i;
        factorial.push(resultado);
    }
    console.log(factorial);
}
// factorial(); 




/*
     * 10. Realiza un programa que lea desde teclado 10 números, pero que no permita
     * introducir números repetidos. El programa acabará cuando haya obtenido 10
     * números distintos que mostrará posteriormente en pantalla.
     */

function repetidos() {

    let numeros = [];


    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });




    let pregunta = (i) => {

        rl.question(`escribe un numero para la posición ${i}: `, (numero) => {

            numero = parseInt(numero);


            //condicion de salida...
            if (i === 10) {
                console.log("El total de numeros introducidos es: " + numeros);
                rl.close();

            } else if (numeros.includes(numero)) {

                console.log("Numero repetido detectado");
                pregunta(i);


            } else {
                pregunta(i + 1);
                numeros.push(numero);

            }


        });

    };

    pregunta(1);

}

// repetidos();

/*14. Realiza un programa que rellene un vector de 5 posiciones con números
aleatorios entre 0 y 10 (ambos incluidos). Copia dicho vector en otro de
las dos formas posibles explicadas en clase. Muestra el vector original y
el vector copia.*/

function copiaVector() {

    let original = [1, 2, 3, 4, 5];

    let copia = [];

    for (let elemento of original) {

        copia.push(elemento);
    }
    console.log("copia con let..of " + copia);


    let copia2 = [];
    original.forEach((element, index) => {

        copia2.push(element);

    });
    console.log("copia con for-each:  " + copia2);

}

//copiaVector(); 


/*15. Realiza un programa que dado un vector de 10 posiciones numéricas
    enteras:
    a. Rellénalo de números aleatorios entre 100 y 200 (ambos
    incluidos).
    b. Muestra su contenido en una línea de pantalla.
	
c. Ordénalo de menor a mayor utilizando un algoritmo de
    ordenación. d. Muestra su contenido actual en una línea de pantalla.

    e. Ordénalo de mayor a menor utilizando un algoritmo de
    ordenación.
    f. Muestra su contenido actual de mayor a menor en una línea
    de pantalla.
    Nota: usa clases y estructura tu programa en diferentes métodos
    reutilizables.*/

function vector() {

    let vector = [];
    let ordenado = [];
    let revetido = [];
    var contador = 0;

    do {

        let numero = Math.floor(Math.random() * 200) + 100;

        if (!vector.includes(numero)) {
            contador++;
            vector.push(numero);
        }


    } while (contador != 10);

    console.log("Vector original: " + vector);

    ordenado = vector.sort();
    console.log("Vector ordenado: " + ordenado);

    revetido = ordenado.reverse();
    console.log("Vector revertido: " + revetido);

}

// vector(); 


/*26. Crear una matriz de 3×3 con los números del 1 al 9. Después, mostrar
por pantalla la matriz.*/



function matriz() {
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log("Matriz:");
    console.table(matriz);
}

//matriz();



function matriz2() {
    let matriz = [];

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(`Escribe el numero de filas que deseas que tenga la matriz: `, (num_filas) => {
        let filas = parseInt(num_filas);

        rl.question(`Escribe el numero de columnas que deseas que tenga la matriz: `, (num_columnas) => {
            let columnas = parseInt(num_columnas);

            for (let i = 0; i < filas; i++) {
                let fila = [];
                for (let j = 0; j < columnas; j++) {
                    fila.push(Math.floor(Math.random() * 10));
                }
                matriz.push(fila);
            }
            
            console.table(matriz);

            rl.close();
        });
    });
}

//matriz2();





/*28. Crear dos matrices de nxn y sumar sus valores, los resultados se deben
almacenar en otra matriz. Los valores y la longitud, serán insertados por
el usuario. Mostrar las matrices originales y el resultado.*/

function generadoMatriz() {

    let matriz = [];

    for (var i = 0; i < 4; i++) {
        let fila = [];
        for (var j = 0; j < 4; j++) {

            fila.push(Math.floor(Math.random() * 10) + 1);
        }
        matriz.push(fila);
    }
    return matriz;

}

//usando for-each
function suma(){

    let matriz1 = generadoMatriz(); 
    let matriz2 = generadoMatriz(); 
    let sumaMatrices = []; 

    console.table(matriz1); 
    console.table(matriz2); 

    matriz1.forEach((fila, i) => {

        let filaMatriz = []; 

        fila.forEach((valor, j) => {
            filaMatriz.push(valor + matriz2[i][j]); 
        }); 

        sumaMatrices.push(filaMatriz); 

    }); 
    console.log("Matriz suma con for-each: "); 
    console.table(sumaMatrices); 



}
//suma(); 


//usando for convencional
function sumaMatrices() {
    let matriz1 = generadoMatriz();
    console.table(matriz1);
    let matriz2 = generadoMatriz();
    console.table(matriz2);

    let sumaMatriz = [];

    for (var i = 0; i < matriz1.length; i++) {
        let filaSuma = [];
        for (var j = 0; j < matriz1[0].length; j++) {
            filaSuma.push(matriz1[i][j] + matriz2[i][j]);
        }
        sumaMatriz.push(filaSuma);
    }

    console.table(sumaMatriz);


}

//sumaMatrices();



/*29.Realiza un programa que cargue desde teclado una tabla bidimensional
de 2x3 de números enteros. Posteriormente el programa pedirá un
número a buscar, y en caso de encontrarlo indicará el número de fila y
columna donde se ha encontrado por primera vez.
 el programa ofrezca al
usuario la opción de seguir buscando más números: “¿Desea seguir
buscando?(s/n)”.*/


function buscarNumero() {
    let matriz = generadoMatriz();
    console.table(matriz);

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const preguntarNumero = () => {
        rl.question(`Escribe el numero que deseas buscar: `, (num_buscar) => {
            let numero = parseInt(num_buscar);
            let encontrado = false;

            matriz.forEach((fila, indexFila) => {
                fila.forEach((valor, indexColumna) => {
                    if (valor === numero) {
                        encontrado = true;
                        console.log(`El valor ${valor} se encuentra en la posición [${indexFila}][${indexColumna}]`);
                    }
                });
            });

            if (encontrado) {
                console.log("El numero introducido se encuentra en la matriz generada");
            } else {
                console.log("El numero introducido no se encuentra en la matriz generada");
            }

            rl.question(`¿Deseas buscar más números? (SI/NO): `, (respuesta) => {
                if (respuesta.toUpperCase() === "SI") {
                    preguntarNumero(); // Llamar de nuevo para preguntar otro número
                } else {
                    rl.close(); // Cerrar la interfaz de lectura
                }
            });
        });
    };

    preguntarNumero(); // Iniciar la primera pregunta
}

//buscarNumero();


/*31. Realiza un programa que cargue desde teclado una tabla de enteros de
 dimensión 3x3. El programa mostrará la columna en la que la suma de
 sus elementos sea menor.*/


 function matriz5() {
    
    let matriz = []; 

    let i = 0; 
    let j = 0; 
    let sumaColumna = []; 
    let sumaFila = []; 

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    }); 

    let pregunta = () => {

        rl.question(`escribe un número para la posición [${i}, [${j}] del array: ] `, (numero) => {

                numero = parseInt(numero); 

                

                if( j != 3){  //si aún no se ha llenado la fila...

                    if(!matriz[i]) matriz[i] = [];

                    matriz[i].push(numero); 

                    

                    j++; 

                }else{ //si j es === a 3... es decir, hemos llenado la fila

                    i++; //pasamos a la siguiente fila
                    j= 0; //restauramos el contado de j

                }


                if ( i === 3){ // si ya hemos terminado de rellenar todo...


                    rl.close(); 
                    console.table(matriz); 

                     

                     


                }else pregunta(); 

        });



    };
    pregunta(); 
}
 //matriz5();
 






/*32. [Ampliación] Realizar un programa que cree y cargue una matrizObj de 3
filas por 4 columnas. Hacer un método que imprima la primera fila, otro
que imprima la última fila, otro que imprima la primera columna y otro
que imprima la primera fila, la última fila y la primera columna/*/


function imprimir(){

    let matriz = generadoMatriz(); 
    console.table(matriz); 

    let primerFila = []; 
    let lastFila = []; 

    let primerCols = []; 
    let lastCols = [];

        //vamos directamente a las columnas:  para solo imprimir las filas: 
        for(var j = 0; j < matriz[0].length; j++){

            primerFila.push(matriz[0][j]);
            lastFila.push(matriz[matriz.length-1][j]); 
        }

        //vamos direactamente a las filas: para solo imprimir las columnas:
        for(var i = 0; i < matriz.length; i++){
            primerCols.push(matriz[i][0]);
            lastCols.push(matriz[i][matriz[0].length - 1]);
      }

    console.log("primera columna"+primerCols); 
    console.log("ultima columna"+lastCols);     

    console.log("primera fila: "+primerFila); 
    console.log("ultima fila: "+ lastFila); 
 
}

//imprimir(); 


let familia = ["Alicia", "Tania", "Yolanda", "Lorenzo"]; 

function buscarNombre(nombre){

    let encontrado = false; 

  for(var item of familia){

    if(item.toUpperCase() == nombre.toUpperCase()){
        encontrado = true; 
    }
  }

  return encontrado; 


}

//console.log("Esta en familia es nombre: "+buscarNombre("ALICIA")); 








