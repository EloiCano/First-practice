//Exercicis de programació  

//Estructures alternatives i iteratives

//Condicional simple: if 


//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el 
//número és més petit que zero. 

//let número=prompt("Escriu un número: ");
//número=Number(número)
//if(número<0){
//    console.log("el número llegit és negatiu");
//}   else if (número===0) {
//        console.log("El número és 0, per tant, és un número neutre (ni positiu ni negatiu)");
//    } else {
//        console.log("El número és positiu");
//    }



//13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el 
//número es parell. 

//let número=prompt("Escriu un número: ");
//número=Number(número);
//if(número%2==0){
//    console.log("el número llegit és parell")
//}   else {
//        console.log("el número llegit és senar")
//}



//13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el 
//número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas. 

//let número=prompt("Escriu un número: ");
//número=Number(número);
//if(número%2==0){
//    console.log("el número llegit és parell")
//}   if(número%2!=0) {
//        console.log("el número llegit és senar")    
//}


//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. 
//Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el 
//segon número és més gran que el primer. 

//let número1=prompt("Escriu un número: ");
//let número2=prompt("Escriu un número: ");
//número1=Number(número1);
//número2=Number(número2);
//if(número1>número2){
//    console.log("El número més gran dels dos és:", número1);
//}if(número2>número1){
//    console.log("El número més gran dels dos és:", número2);
//}



//13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola el més gran dels tres. 
//Pista: fes servir tres if cadascun d’ells per comprovar si un dels números és el més gran. 

//let número1=prompt("Escriu un número: ");
//let número2=prompt("Escriu un número: ");
//let número3=prompt("Escriu un número: ");
//número1=Number(número1);
//número2=Number(número2);
//número3=Number(número3);
//if(número1>número2 && número1>número3){
//console.log("El número més gran dels tres és:", número1);
//}if(número2>número1 && número2>número3){
//console.log("El número més gran dels tres és:", número2);
//}if(número3>número1 && número3>número2){
//    console.log("El número més gran dels tres és:", número3);
//}else {
//    console.log("Hi ha almenys dos números iguals.");
//}




//13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per 
//pantalla el nom del mes que correspon.

//let número1=prompt("Escriu un número de l'1 al 12: ");
//número1=Number(número1);
//if (número1===1){ 
//   console.log("El mes que es correspon amb aquest número és GENER");
//}if (número1===2){
//    console.log("El mes que es correspon amb aquest número és FEBRER");
//}if (número1===3){
//    console.log("El mes que es correspon amb aquest número és MARÇ");
//}if (número1===4){
//    console.log("El mes que es correspon amb aquest número és ABRIL");
//}if (número1===5){
//   console.log("El mes que es correspon amb aquest número és MAIG");
//}if (número1===6){
//   console.log("El mes que es correspon amb aquest número és JUNY");
//}if (número1===7){
//   console.log("El mes que es correspon amb aquest número és JULIOL");
//}if (número1===8){
//   console.log("El mes que es correspon amb aquest número és AGOST");
//}if (número1===9){
//   console.log("El mes que es correspon amb aquest número és SETEMBRE");
//}if (número1===10){
//   console.log("El mes que es correspon amb aquest número és OCTUBRE");
//}if (número1===11){
//   console.log("El mes que es correspon amb aquest número és NOVEMBRE");
//}if (número1===12){
//   console.log("El mes que es correspon amb aquest número és DECEMBRE");
//}if (número1<1 || número1>12){
//    console.log("El valor introduït no es correspon amb un valor entre 1 i 12");
//}



//Condicional doble: if - else


//14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és negatiu” si el 
//número és més petit que zero i escrigui el missatge “el número llegit és positiu” en cas contrari.

//let número=prompt("Escriu un número: ");
//número=Number(número)
//if(número<0){
//    console.log("el número llegit és negatiu");
//}   else if (número===0) {
//        console.log("El número és 0, per tant, és un número neutre (ni positiu ni negatiu)");
//    } else {
//        console.log("El número és positiu");
//    }



//14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el 
//número es parell i “el número llegit es senar” en cas contrari.

//let número=prompt("Escriu un número: ");
//número=Number(número);
//if(número%2==0){
//    console.log("el número llegit és parell")
//}   else {
//        console.log("el número llegit és senar")
//}



//14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. 
//Només pots fer servir una instrucció if-else. 

//let número1=prompt("Escriu un número: ");
//let número2=prompt("Escriu un número: ");
//número1=Number(número1);
//número2=Number(número2);
//if(número1>número2){
//    console.log("El número més gran dels dos és:", número1);
//}else{
//    console.log("El número més gran dels dos és:", número2);
//}



//14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova 
//si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. 
//Si tampoc ho és, el més gran, sens dubte, serà el tercer. 

//let número1=prompt("Escriu un número: ");
//let número2=prompt("Escriu un número: ");
//let número3=prompt("Escriu un número: ");
//número1=Number(número1);
//número2=Number(número2);
//número3=Number(número3);
//if(número1>número2 && número1>número3){
//console.log("El número més gran dels tres és:", número1);
//}else if(número2>número1 && número2>número3){
//console.log("El número més gran dels tres és:", número2);
//}else if(número3>número1 && número3>número2){
//    console.log("El número més gran dels tres és:", número3);
//}else {
//    console.log("Hi ha almenys dos números igual de grans.");
//}



//14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats.  

//let número1 = prompt("Escriu un número: ");
//let número2 = prompt("Escriu un número: ");
//let número3 = prompt("Escriu un número: ");
//let menor = 0;
//let mitjà = 0;
//let major = 0;
//número1 = Number(número1);
//número2 = Number(número2);
//número3 = Number(número3);

//if (número1 === número2 || número1 === número3 || número2 === número3) {
//    console.log("Dos o més nombres estan repetits i, per tant, no es poden ordenar com es demana");
//} else {
//    if (número1 < número2 && número1 < número3) {
//        menor = número1;
//    } else if (número2 < número1 && número2 < número3) {
//        menor = número2;
//    } else {
//        menor = número3;
//    }
//    if ((número1 < número2 && número1 > número3) || (número1 > número2 && número1 < número3)) {
//        mitjà = número1;
//    } else if ((número2 < número1 && número2 > número3) || (número2 > número1 && número2 < número3)) {
//        mitjà = número2;
//    } else {
//        mitjà = número3;
//    }
//    if (número1 > número2 && número1 > número3) {
//        major = número1;
//    } else if (número2 > número1 && número2 > número3) {
//        major = número2;
//    } else {
//        major = número3;
//    }
//    console.log(menor, mitjà, major);
//}



//14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. 
//El programa demanarà dues dades: Si la persona té carnet de conduir i el valor que ha sortit a la prova d’alcoholèmia. 
//El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

//let carnet_o_no=prompt("El conductor disposa de llicència en vigor per conduir? 'si' o 'no'? ");
//while(carnet_o_no!='si' && carnet_o_no!='no'){
//    console.log("Escriu el que demana el programa, si us plau");
//    carnet_o_no=prompt("El conductor disposa de llicència en vigor per conduir? 'si' o 'no'? ");
//}
//let valor_taxa_alchol=prompt("Quin és el valor que ha donat el control? ");
//valor_taxa_alchol=Number(valor_taxa_alchol);
//
//if(carnet_o_no=='si' && valor_taxa_alchol<0.25){
//    console.log("Sí que pot conduir.");
//}   else if(carnet_o_no=='no' || valor_taxa_alchol>=0.25){
//        console.log("No pot conduir.");
//}



//13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran 
//el nombre més petit. 

//let numero1=prompt("Escriu un número: ");
//let numero2=prompt("Escriu un número: ");
//numero1=Number(numero1);
//numero2=Number(numero2);
//if(numero1>=numero2){
//    console.log("La resta numero1-numero2 és:",numero1-numero2);
//    }else{
//        console.log("La resta numero2-numero1 és:",numero2-numero1);
//    }



//14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una 
//quantitat (el que cal pagar) per teclat fent servir la instrucció prompt. 

//En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que 
//el transport és gratis. 

//En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en 
//concepte de cost d’enviament.  


//let quantitat=prompt("Escriu el valor del que has de pagar: ");
//quantitat=Number(quantitat);
//
//if(quantitat>=30){
//    console.log("La quantitat a pagar és==",quantitat,"euros perquè si el preu és igual-major que 30 euros, no es cobren gastos d'enviament.");
//    }else{
//        console.log("La quantitat a pagar és==",quantitat+4.95, "euros perquè la compra és menor a 30 euros i se sumen 4.95 euros de gastos d'enviament.");
//    }



//14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 
//1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 
//2. Quin d’aquests sabors vol: 
//
//    1. Vainilla o Xocolata. No cal afegir res 
//
//    2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 
//
//    3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. Si l’usuari posa alguna dada malament, 
//    el missatge que es posarà a la consola serà “Error dades mal introduïdes” Si totes les dades són correctes, escriurà el preu final.

//let c=3.45;
//let t=3.95;
//let tipus=prompt("Vols un conus o una terrina? ")
//while(tipus!='conus' && tipus!='terrina'){
//    console.log('Error dades mal introduïdes.')
//    tipus=prompt("Vols un conus o una terrina? ")
//}
//let sabor=prompt("Quin sabor vols? Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds o Ametlles? ");
//while(sabor!='Vainilla' && sabor!='Xocolata' && sabor!='Turró' && sabor!='Menta' && sabor!='Oreo' && sabor!='Crema' && sabor!='Gerds' && sabor!='Ametlles'){
//console.log('Error dades mal introduïdes.');
//    sabor=prompt("Quin sabor vols? Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds o Ametlles? ")
//}
//if(tipus=='conus'){
//    if(sabor=='Vainilla' || sabor=='Xocolata'){
//        console.log("El preu és:",c);   
//    }   else if(sabor== "Turró" || sabor=="Menta" || sabor=="Oreo"){
//            console.log("El preu és:",c+0.5);
//        }   else if(sabor== "Crema" || sabor=="Gerds" || sabor=="Ametlles"){
//                console.log("El preu és:",c+1);
//            }
//}
//
//if(tipus=='terrina'){
//    if(sabor=='Vainilla' || sabor=='Xocolata'){
//        console.log("El preu és:",t);   
//    }   else if(sabor== "Turró" || sabor=="Menta" || sabor=="Oreo"){
//            console.log("El preu és:",t+0.5);
//        }   else if(sabor== "Crema" || sabor=="Gerds" || sabor=="Ametlles"){
//                console.log("El preu és:",t+1);
//            }
//}



//Condicional múltiple: switch 

//15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per 
//pantalla el nom del mes que correspon.  

//let numeroMes=prompt("Escriu un número entre 1 i 12: ");
//numeroMes=Number(numeroMes);
//switch (numeroMes) {
//    case 1:
//        console.log('Gener')
//        break;
//    
//    case 2:
//        console.log('Febrer')
//        break;
//
//    case 3:
//        console.log('Març')
//        break;
//
//    case 4:
//        console.log('Abril')
//        break;
//
//    case 5:
//        console.log('Maig')
//        break;
//
//    case 6:
//        console.log('Juny')
//        break;
//
//    case 7:
//        console.log('Juliol')
//        break;
//
//    case 8:
//        console.log('Agost')
//        break;
//
//    case 9:
//        console.log('Setembre')
//        break;
//
//    case 10:
//        console.log('Octubre')
//        break;
//
//    case 11:
//        console.log('Novembre')
//        break;
//
//    case 12:
//        console.log('Desembre')
//        break;
//
//    default:
//        console.log("Aquest número no està entre 1 i 12. Si us plau, introdueix un número que estigui dins dels demanats.")
//}



//15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 
//1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 
//2. Quin d’aquests sabors vol: 

//1. Vainilla o Xocolata. No cal afegir res 
//2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 
//3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. Fes servir la instrucció switch per fer el càlcul 
//de l’increment de preu associat al sabor. Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà 
//“Error dades mal introduïdes”. Si totes les dades són correctes, escriurà el preu final. 

//let preubase
//let preutipus
//let conus_o_terrina=prompt("Vols un conus o una terrina? ");
//let tipus=prompt("Escriu el tipus de sabor: Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds o Ametlles? ")
//switch(conus_o_terrina){
//    case('conus'):
//        preubase=3.45;
//        break;
//
//    case('terrina'):
//        preubase=3.95;
//        break;
//    default:
//        console.log("Error! Dades mal introduïdes.")
//}
//switch(tipus){
//    case('Vainilla'):
//    case('Xocolata'):
//        preutipus=0
//        console.log ("El preu total és de:",preubase+preutipus,"euros");
//        break;
//
//    case('Turró'):
//    case('Menta'):
//    case('Oreo'):
//        preutipus=0.5;
//        console.log("El preu total és de:",preubase+preutipus,"euros");
//        break;
//    
//    case(tipus=='Crema'):
//    case('Gerds'):
//    case('Ametlles'):
//        preutipus=1;
//        console.log("El preu total és de:",preubase+preutipus,"euros");
//        break;
//    default:
//        console.log("Error! Dades mal introduïdes.");
//}



//15.3.- Escriu un programa, que donat una lletra que representa un dia de 
//la setmana (l - dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o festiu. 
//Són laborables de dilluns a divendres. Fes servir la instrucció switch. 


//lletra_dia=prompt("Escriu la lletra inicial de qualsevol dia de la semana (l, m, x, j, v, s, d): ")
//switch(lletra_dia){
//    case('l'):
//    case('m'):
//    case('x'):
//    case('j'):
//    case('v'):
//        console.log("Aquesta lletra","(",lletra_dia,")","pertany a un dia LABORABLE");
//        break;
//    case('s'):
//    case('d'):
//        console.log("Aquesta lletra","(",lletra_dia,")","pertany a un dia FESTIU");
//        break;
//    default:
//        console.log("Error! Dades mal introduïdes.");
//}



//Bucles: for 


//16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.
//let cops
//for(cops=0; cops<10; cops++){
//    console.log('Estem fent bucles');
//}



//16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20. 
//let nombres
//for(nombres=5;nombres<=20;nombres++){
//    console.log(nombres);
//}



//16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.
//let suma=0
//let N=prompt("Escriu un nombre: ");
//N=Number(N);
//for(i=1;i<=N;i++){
//    suma=suma+i;
//}console.log("La suma de tots els nombres entre 1 i",N,"és:", suma);



//16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre. 
//El factorial és la multiplicació de tots els números entre 1 i N.  

//let N=prompt("Escriu un nombre: ");
//N=Number(N);
//let i=1
//let factorial=1
//for(i=1;i<=N;i++){
//    factorial=factorial*i
//}console.log("El factorial de",N,"és:",factorial);



//16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) calculi la suma de tots els números 
//entre N i M (ambdós inclosos). 
//let N=prompt("Escriu un número: ");
//let M=prompt("Escriu un número més gran que l'anterior: ");
//N=Number(N);
//M=Number(M);
//suma=0
//for(i=N;i<=M;i++){
//    suma=suma+i;
//}console.log("La suma de tots els nombres entre",N,"i",M,"és:",suma);



//16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números parells entre 2 i N. 
//let suma_parells=0
//let N=prompt("Escriu un nombre: ")
//N=Number(N);
//
//for(i=2;i<=N;i=i+2){
//    suma_parells=suma_parells+i;
//}console.log("La suma de tots els números parells entre 2 i",N,"és:", suma_parells);



//16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N. 

//let N=prompt("Escriu un número: ");
//N=Number(N);
//console.log("La taula de multiplicar de",N,"és:")
//for(let i=0;i<=10;i++){
//    console.log(N,"*",i,"és:",i*N);
//}


//16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). 
//Observa el que passa si N < 1 
//let N=prompt("Escriu un número: ");
//N=Number(N);
//for(let i=N; i>=1; i--){
//    console.log(i);
//}


//16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*) 

//let N=prompt("Escriu un número: ");
//N=Number(N);
//for(let i=1; i<=N; i++){
//    console.log("*");
//}


//16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el número introduït sigui 5). 
//* 
//** 
//*** 
//**** 
//***** 

//let asterisc=''
//let N=prompt("Escriu un número: ");
//N=Number(N);
//for(i=1; i<=N; i++){
//    asterisc=asterisc+'*'
//    console.log(asterisc)
//
//}



//16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la següent: 
//Si N ← 2 i M ← 5 Sortida per consola:  2 22 222 2222 22222  
//La suma de la sèrie és:24690

//// Solicitar al usuario que introduzca els números N i M
//let N = parseInt(prompt("Introdueix el valor de N:"));
//let M = parseInt(prompt("Introdueix el valor de M:"));
//
//    for (let i = 1; i <= M; i++) {
//        // Crear el número repetint N, i cops
//        let numeroActual = parseInt(N.toString().repeat(i));
//        console.log(numeroActual);
//
//        // Sumar el número actual a la suma total
//        suma += numeroActual;
//    }




//Bucles: while 


//17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.  

//let iteracions=1
//while(iteracions<=10){
//    console.log("Estem fent bucles");
//    iteracions++;
//}


//17.2.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els nombres del 5 al 20. 

//let nombres=5;
//while(nombres<=20){
//    console.log(nombres);
//    nombres++
//}


//17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a la consola tots 
//els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1 
//let N=prompt("Escriu un nombre: ");
//N=Number(N);
//if(N>=1){   
//while (N>=1) {
//    console.log(N);
//    N--
//}
//}else{
//    console.log("Error. Has introduït un nombre menor que 1");
//}


//17.4.- Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número N donat. 
//La seqüencià de Fibonnacci consisteix en la suma dels dos valors anteriors tenint en compte que els dos primers són 1 i 1. 
//Així, els 7 primers números de Fibonnacci són: 1 1 2 3 5 8 13 Els dos primers són 1 i 1 El tercer és 1 + 1 → 2 El quart és 1 + 2 → 3 
//El cinquè és 2 + 3 → 5 El sisè és 3 + 5 → 8 El setè és 5 + 8 → 13 

//let i=1;
//let resultat=1;
//let valorInicial=1;
//let valorAnterior=0;
//console.log(resultat);
////Això esriurà el primer 1.
//
//while(i<8){
//
//    resultat=valorInicial+valorAnterior;
//    console.log(resultat);
//
//    valorAnterior=valorInicial;
//    valorInicial=resultat;
//
//    i++;
//}




//17.5.- Escriu un programa que, donats dos números N i M, escrigui en la consola la llista de 
//multiplicacions N*1, N*2, N*3, N*4,...,N*M Per evitar problemes per la mida del resultat (en cas que N o M siguin molt grans) 
//l’escriptura de multiplicacions s’ha d’aturar si el resultat és més gran que 
//999999 (faig servir l’espai com a separadors de milers per tal que quedi més clar el nombre). 
//Per exemple, si els nombres introduits són 200000 i 5000 els resultat per consola hauria 
//de ser: 200000, 400000, 600000, 800000, 1000000  I ja no s’escriuria res més doncs 1000000 és més gran que 999999

//let contador=1;
//let N=prompt("Escriu un nombre: ");
//N=Number(N);
//let M=prompt("Escriu un nombre: ");
//M=Number(M);
//while(contador<=M){
//    if (contador*N<1000000){
//        let resultat=contador*N
//        console.log("La multiplicació de",N,"*",contador,"és:", resultat);
//        contador++
//
//
//    }else{
//        console.log("El programa no permet càlculs de números més grans que 999999");
//        break;
//    }
//
//}
