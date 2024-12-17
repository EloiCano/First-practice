//Exercici 3.1
//Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una 
//cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció. 

//function determinaParellImparell(nombre){
//    if(nombre%2===0){
//        return "El nombre " + nombre + " és parell";
//    }else{
//        return "El nombre " + nombre + " és imparell";
//    }
//}
//let nombre=prompt("Escriu un nombre:");
//nombre=Number(nombre);
//console.log(determinaParellImparell(nombre));


//Exercici 3.2
//Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin 
//múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és. 

//function anyDeTraspàs(nombre){
//    if(nombre%400===0){
//        return "El nombre " + nombre + " És un any de trapàs";
//    }else if(nombre%100===0 && nombre%4===0){
//        return nombre + " NO és un any de traspàs"
//    }else if(nombre%4===0){
//        return "El nombre " + nombre + " És un any de trapàs";
//    }else{
//        return "El nombre " + nombre + " NO és un any de traspàs";
//    }
//}
//let nombre=prompt("Escriu un nombre:");
//nombre=Number(nombre);
//console.log(anyDeTraspàs(nombre));



//Exercici 3.3
//Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.


//function sumatori(N){
//    let sumatori=0
//    for(let n=1; n<=N; n++){
//        sumatori=sumatori + 1/Math.pow(n,2);
//    }return sumatori;
//}
//let N=prompt("Escriu un nombre enter:");
//N=Number(N);
//console.log(sumatori(N));



//Exercici 3.4
//Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació 
//continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades.


//El càlcul de la nota final serà diferent depenent de si l’estudiant ha seguit o no l’avaluació continuada, i de la nota d’aquesta:

//Si la nota d’avaluació continuada és més gran o igual que 5, la nota final la calcularem com: 

//NOTA_FINAL = 0,2 * NOTA_AC + 0,4 * NOTA_PRACT + 0,4 * NOTA_EXAMEN 

//Si la nota d’avaluació continuada és menor que 5, la nota final la calcularem com: 

//>NOTA_FINAL = 0,4 * NOTA_PRACT + 0,6 * NOTA_EXAMEN 

//On NOTA_FINAL és la nota final de l’assignatura que hem de calcular, NOTA_AC és la nota d’avaluació continuada, NOTA_PRACT és 
//la nota de pràctiques, i NOTA_EXAMEN és la nota de l’examen. 

//La funció ha de retornar una cadena que contingui el valor numèric de la nota final obtinguda per l’alumne, seguit de la 
//nota però en format lletra, fent servir la següent taula de conversió: 


//Si la nota final és menor que 5 tindrà una D. 
//Si la nota final és major o igual que 5 i menor que 6,5 tindrà una C.
//Si la nota final és major o igual que 6,5 i menor que 8 tindrà una B. 
//Si la nota final és major o igual que 8 i menor que 10 tindrà una A.
//>I si la nota final és un 10 tindrà una H. 
//Important: Totes tres notes seran valors numèrics, i podem suposar que sempre tindrem els tres valors i seran més grans o iguals que 0. 




//function notaFinalAlumne(notaFinalContinuada,notaPràctiques,notaExamen){
//    if(notaFinalContinuada>=5){
//        notaFinalAlumne=0.2*notaFinalContinuada + 0.4*notaPràctiques + 0.4*notaExamen  
//    
//    }else{
//        notaFinalAlumne=0.4*notaPràctiques + 0.6*notaExamen
//
//    }if(notaFinalAlumne<5){
//        return "La nota final és " + notaFinalAlumne + " D";
//    
//    }else if(notaFinalAlumne>=5 && notaFinalAlumne<6.5){
//        return "La nota final és " + notaFinalAlumne + " C";
//    
//    }else if(notaFinalAlumne>=6.5 && notaFinalAlumne<8){
//        return "La nota final és " + notaFinalAlumne + " B";
//    
//    }else if(notaFinalAlumne>=8 && notaFinalAlumne<10){
//        return "La nota final és " + notaFinalAlumne + " A";
//    
//    }else{
//        return "La nota final és " + notaFinalAlumne + " H";
//    }
//}
//let notaFinalContinuada=prompt("Digues nota final continuada entre 1 i 10:"); notaFinalContinuada=Number(notaFinalContinuada);
//let notaPràctiques=prompt("Digues nota final pràctiques entre 1 i 10:"); notaPràctiques=Number(notaPràctiques);
//let notaExamen=prompt("Digues nota final examen entre 1 i 10:"); notaExamen=Number(notaExamen);
//console.log(notaFinalAlumne(notaFinalContinuada,notaPràctiques,notaExamen));




//Exercici 3.5
//Hem organitzat un concurs a Twitter que consisteix en fer relats curs (màxim 280 caràcters) amb el màxim número de paraules de 
//5 caràcters. Per poder donar el premi, el que volem fer és classificar tots  els tuits segons el nombre de paraules de 
//5 caràcters que tenen i, per tant, necessitem una funció que, donada una frase, ens retorni el número de paraules de 5 
//caràcters que té.

//Per fer aquesta funció haurem de tenir en compte que: 


//Totes les frases acaben en un punt (.) y totes comencen sempre per una paraula. 
//Una paraula acaba quan apareix una coma (,) o un espai en blanc. 
//Les frases només poden tenir lletres, comes, espais en blanc y el punt final. No tindrem en compte que pugui aparèixer cap altre caràcter. 
//Per conèixer la llargària de la frase (quants caràcters té) podem fer servir la propietat length del Strings de JavaScript (consulteu https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Str ing/length per saber com fer-la servir) 


//Exercici 3.6
//A partir de l’experiència del concurs anterior hem decidir fer un concurs semblant cada setmana. 
//Però cada setmana volem comptar paraules amb diferents números de lletres. Així aquesta setmana seran paraules de 7 lletres, 
//la setmana vinent de 4 i l’altre de 3. Què cal modificar a la funció per a que puguem 
//fer servir la mateixa funció totes les setmanes? 


//Exercici 3.7 
//Un conegut que ha vist els nostres concursos ens ha preguntat com ho fem per comptar les paraules d’un determinat 
//número de lletres. Un cop l’hem explicat ens ha demanat si li podíem fer una funció que, donada una frase, 
//ens retorni a una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.

