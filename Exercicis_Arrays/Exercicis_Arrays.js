//Exercicis de taules

//Introducció a les taules



//21.1.- Fes un programa que faci el següent:
//● Defineix una variable de tipus taula, buida.
//● Afegeixi el valor “Hola” a la posició 0.
//● Afegeixi el valor “Adeu” a la posició 1.
//● Escrigui a la consola el contingut de la taula.

//let taula=[];
//taula[0]="Hola";
//taula[1]="Adeu";
//console.log(taula);



//21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent:
//● Afegeixi el valor “Nom” a la posició 2 de la taula.
//● Escrigui a la consola el contingut de la taula.
//● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
//● Escrigui a la consola el contingut de la taula.

//let taula=[];
//taula[0]="Hola";
//taula[1]="Adeu";
//taula[2]="Nom";
//console.log(taula);
//taula[1]=",";
//console.log(taula);



//21.3.- Fes un programa que faci el següent:
//● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
//● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
//● Guardi a la posició 6 de la taula la suma dels elements
//● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

//let taula=[23,45,98,73];
//console.log("La suma dels elements situats a les posicions 0 i 2 de la taula és:",taula[0]+taula[2]);
//taula[6]=taula[0]+taula[2];
//console.log(taula[6]);
//console.log(taula); //A la posició 4 i 5 la consola diu que els espais no estan definits. 
                    //Aixó és degut a que aquestes posicions no tenen valors assignats.



//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a 
//una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.

//let taula=[];
//let numero=prompt("Escriu un número: ");
//numero=Number(numero);
//taula[0]=numero*2; taula[1]=numero*3;
//console.log(taula);



//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a 
//una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts.

//let taula=[];
//let numero1=prompt("Escriu un número: "); let numero2=prompt("Escriu un número: ");
//numero1=Number(numero1); numero2=Number(numero2);
//taula[0]=numero1+numero2;
//taula[1]=numero1-numero2;
//taula[2]=numero1*numero2;
//taula[3]=numero1/numero2;
//console.log(taula);



//21.6.- Donada aquesta taula:
//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula.
//*****
//Donada la definició d’aquesta taula:

//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//console.log(taula[0], taula[taula.length-1]);



//21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un.

//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//for(let i=0;i<taula.length;i++){
//    console.log(taula[i]);
//}


//21.8.- Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula.

//let suma=0;
//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//for(let i=0;i<taula.length;i++){
//    suma=suma+taula[i];
//}console.log("La suma de tots els números de la taula és:",suma);



//21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot 
//sumant-los 25 (així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la 
//nova taula a la consola.

//let taula2=[];
//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//for(let i=0;i<taula.length;i++){
//    taula2[i]=taula[i]+25
//}console.log(taula2);



//21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la 
//consola (la mitjana es calcula sumant tots els valors i dividint pel nombre de valors).

//let suma=0;
//let mitjana=0;
//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//for(let i=0;i<taula.length;i++){
//    suma=suma+taula[i];
//}console.log(mitjana=suma/taula.length);



//21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més petit de la taula.


//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//let min=taula[0];
//let max=taula[0];
//for(let i=0;i<taula.length;i++){
//    if(taula[i]<taula[i+1]){
//        
//    }
//}console.log(max, min);


//21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui 
//el contingut d’aquesta nova taula a la consola.


//21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops 
//apareix aquest valor a la taula.



//21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el mateix número d’elements i, 
//si és així, crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys.
//Exemple: [1,2,3] + [2,3,4] → [3,5,7]



//21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els valors de la primera però donant-li la volta.
//Exemple: [1,2,3,4,5] → [5,4,3,2,1]
//******




//Donada la definició d’aquesta taula:
//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];


//21.16.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola 
//si es troba o no a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba l’element, s’acabi el bucle.



//21.17.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola 
//si hi ha algun valor més gran a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba que hi ha un element més gran, s’acabi el bucle.



//21.18.- Fes un programa que escrigui “Sí” si el primer número de la taula està repetit i “No” en cas contrari.





//21.19.- Fes un programa que donades dues taules de la mateixa mida, crei una nova taula amb la unió de les dues 
//taules de manera alterna. Per exemple:
//[1,2,3] unió [4,5,6] → [1,4,2,5,3,6]



//21.20.- Fes un programa que, donada una taula i un valor, crei una nova taula sense el valor proporcionat.



//21.21.- Fes un programa que, donada una taula i una posició, guardi a una altra taula la taula inicial, 
//però des de la posició donada fins al final. Per exemple
//[1,2,3,5,6,7,8,9,0] i 4 → [6,7,8,9,0]



//21.22.- Fes un programa que, donada una taula escrigui a la pantalla el primer número que estigui repetit.




//Exercici amb objectes


//Tenim aquesta definició de l’objecte cotxe i dues variables:
//function Auto(marca, modelo, potencia, antiguedad , precio) {
//this.marca = marca;
//this.modelo = modelo;
//this.potencia = potencia;
//this.antiguedad = antiguedad;
//this.precio = precio;
//}
//let miAuto = new Auto("Seat","Ibiza",90,2010,5000);
//let otroAuto = new Auto("Opel","Astra",92,1995,500);


//21.23.- Fes un programa que et digui el model i la marca del vehicle més antic.