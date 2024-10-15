// Operadors aritmètics

//4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?

//a = 25; //25
//b = 15 + a; //40
//c = b * 2; //80
//console.log(a, b, c);

// 4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?

//let a = 10;//10
//let b = 20;//20
//let c = 5;//5
//a = a + 3;//13
//b = b + 4 - a;//11
//c = a + b + c;//29
//a = a + c;//42
//b = 4;//
//c = c + 3 - b + 2;//30
//console.log(a, b, c);

//4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?
//Escriu-los en un paper i desprès executa el codi. Et donen el mateix?

//let a = 5;//5
//let b = 18;//18
//let c = 15;//15
//let d = 22;//22
//a = a + 10;//15
//b = b + 5 - c;//8
//c = c + 4 + b;//27
//d = d + b + a;//45
//console.log(a,b,c,d)
//a = a + 1;//16
//b = b + c;//35
//c = b + c;//62
//d = b + b;//70
//console.log(a,b,c,d)

//4.4.- Quins valors s’escriuran a la consola si executem aquest programa?
//Fes-ho primer sobre paper i desprès prova a l’ordinador.

//let a = 10;//10
//let b = 20;//20
//let c = 5;//5
//a = a + 3;//13
// Fixat en aquesta instrucció.
// Quin valor tenia la variable 'a' abans d’executar-se la instrucció? Tenia valor de 10
//  I desprès? 13
//console.log(a);
//b = b + 4 - a;//11
//console.log(b);
//c = a + b + c;//29
//console.log(c);
//a = a + c;//42
//console.log(a);
//b = 4;//4
//console.log(b);
//c = c + 3 - b + 2;//30
//console.log(c);

//4.5. - Quins valors s’escriuran a la consola si executem aquest programa?
//Fes-ho primer sobre paper i desprès prova a l’ordinador.

//let a = 5;//5
//let b = 18;//18
//let c = 15;//15
//let d = 22;//22
//a = a + 10;//15
//b = b + 5 - c;//8
//c = c + 4 + b;//27
//d = d + b + a;//45
//console.log(a, b, c, d);

//4.6. - Quins valors s’escriuran a la consola si executem aquest programa?

//let a = 10;//10
//let b = 5;//5
//let c = a / b;//2
//let d = a * b;//50
//let e = a % 3;//1
//console.log(c, d, e);

//4.7.- Quins valors s’escriuran a la consola si executem aquest programa?

//let a = 10;//10
//let b = 5;//5
//let c = a * b * 3;//150
//let d = a / 3;//3.333333
//console.log(c, d);

//Operadors unaris

//5.1.- Què s’escriurà a la consola si executem aquest codi?

//let a = 5; //5
//a++; //6
//console.log(a);
//let b = a++; //6 (per a que sigui 7 els signes '++' han d'anar davant de 'a')
//console.log(a, b);

//5.2.- Què s’escriurà a la consola si executem aquest codi?

//let a = 5;//
//++a;//6
//console.log(a);
//let b = ++a;// 7
//console.log(a, b);

//5.3.- Observa aquestes operacions, prova a executar-les i explica el perquè dels resultats obtinguts.

//let a = 5;//5
//let b = a++;//5
//let c = a--;//6
//console.log(a, b, c);

//a = 5;//5
//b = ++a;//6
//c = --a;//5
//console.log(a, b, c);

//a = 5;//5
//let d = 25 + a++;//30
//a = 5;//5
//let e = 25 + ++a;//31
//console.log(d, e);

//Assignacions compostes (no explicat a classe)

//6.1.- Què s’escriurà a la consola si executes aquest codi?
//let a = 10;//10
//a += 5;//15
//console.log(a);
//a *= 5;//75
//console.log(a);
//a -= 5;//70
//console.log(a);
//a /= 5;//14
//console.log(a);

//Cadenes de caràcters

//7.1.- Quines d’aquestes assignacions de cadenes de caràcters són incorrectes?

//let a = "Hola";//Està bé.
//let b = 'Hola';//Està bé.
//let c = 'Hola";//Està malament perquè les cometes d'obertura i tancament han de ser del mateix tipus (o dobles o úniques).
//let d = "Hola 'gramola'";//Està bé.
//let e = 'Hola "gramola'";//Està malament perquè les cometes estan tancades de forma incorrecta (no segueixen cap ordre de tancament).

//7.2.- Què s’escriurà a la consola si executes aquest codi?

//let a = "Hola";//"Hola"
//let b = "Adéu";//"Adéu"
//console.log(a + b);//"HolaAdéu"
//let c = a + 2;//"Hola2"
//console.log(c);//"Hola2"

//Comparacions

//8.1.- Què s’escriurà a la consola si executes aquest codi?

//let a = 5, b = 7;
//let c = 5, d = "5";
//let e1 = a == b;//False
//let e2 = c == d;//True
//let e3 = c === d;//False
//console.log(e1, e2, e3);

//8.2.- Què s’escriurà a la consola si executes aquest codi?

//let a = true;
//let b = false;
//let c1 = true === false;//False
//let c2 = true == 1;//True
//let c3 = true === 1;//False
//console.log(c1, c2, c3);

//8.3.- Què s’escriurà a la consola si executes aquest codi?

//let a = 10;//10
//let b = 20;//20
//console.log(a > b, a < b);//(False, True)

//8.4.- Què s’escriurà a la consola si executes aquest codi?

//let a = "Hola";
//let b = "hola";
//let c = "Adéu";
//let d1 = a === b;//False
//let d2 = a < b;//True perquè les majúscules tenen valors Unicode menors a les minúscules.
//let d3 = a < c;//False perquè les majúscules tenen valor Unicode més gran o més petit en funció de l'ordre alfabètic. Com "H" és una lletra que apareix més tard que "A" alfabèticament, això implica que "H" és major i "A" menor.
//console.log(d1, d2, d3);

//8.5.- Què s’escriurà a la consola si executes aquest codi? Per què?

//let a = 9;//9
//let b = 7;//7
//let c = 3;//3
//let d = a < b < c;//d= 9<7 (False), False<3=True perquè False==0 que és menor a 3. Per tant, d=True donat que el problema és resol d'esquerra a dreta i pas per pas.
//console.log(d);

//Operadors lògics

//9.1.- Quins valors escriuran a la consola aquestes expressions? Explica el perquè.

//console.log(true && true);//True
//console.log(true && false);//False
//console.log(false && 3 == 4);//False
//console.log(false && true);//False
//console.log(false && false);//False

//9.2.- Quins valors escriuran a la consola aquestes expressions? Explica el perquè.

//console.log(false || false);//False
//console.log(false || true);//True
//console.log(false || 3 == 4);//False
//console.log(true || true);//True
//console.log(true || false);//True

//Prioritat dels operadors

//10.1.- Quins valors s’escriuran a la consola si executem aquest programa? Atenció a la prioritat de les operacions

//let a = 5;//5
//let b = 10;//10
//let c = 2; a = a + b * c;//25
//console.log(a);

//let r = a % b + 1;//5+1=6 // Quina operació és %? És una divisió que només dona el residu de l'operació.
//let d = c + a / b;//4.5
//console.log(d,r);

//10.2.- Quins valors s’escriuran a la consola si executem aquest programa?

//let a = 5;//5
//let b = 6;//6
//let c = 2;//2
//let d1 = a + b * c;//17
//let d2 = (a + b) * c;//22
//let d3 = a - b * c + a / c + (6 % 5);//-3.5
//console.log(d1, d2, d3);

////10.3.- Quins valors s’escriuran a la consola si executem aquest programa?

//let e1 = (false && false) || true;//True
//let e2 = false || (false && true);//False
//console.log(e1, e2);

//10.4.- Quins valors s’escriuran a la consola si executem aquest programa?
//És molt important que ho intentis fer a mà abans de provar-lo a l’ordinador.

//let a = 5;//5
//let b = 4;//4
//let e1 = a > b || a < b;//True or False==True
//let e2 = a > b && a < b;//True and False==False
//let e3 = e1 || e2;//True or False==True
//let e4 = a <= b + 1 && b - 1 * 5 < 0; //((5<=4+1==True) and (-1<0==True))==True
//console.log (e1,e2,e3,e4);

//L’operador interrogant

//11.1.- Explica el que fa aquest programa.
//let a = prompt("Introdueix un número");
//let b = a >= 18 ? "Ets major d'edat" : "No ets major d'edat";
//console.log(b);//Aquest programa fa introduir un número a l'usuari i, en funció del número introduït, la consola treu per pantalla si és major o menor d'edat.
//Aquest programa fa servir l'operador ternari per dur a terme l'acció. Aquest operador està compost d'una condició, expresió1(valor que torna si la condició és True) i expresió2 (valor que torna si la condició és False).



//11.2.- Escriu un programa que demani dos números (fent servir la instrucció prompt) i escrigui a la consola qual és el més gran. 
//Fes servir l’operador interrogant (?)

//let a=prompt("Escriu el primer número");
//let b=prompt("Escriu un segon número");
//a=Number(a);
//b=Number(b);
//if(a>b){
//    console.log("El més gran és: ",a);
//}else if(b>a){
//    console.log("El més gran és: ",b);
//}else{
//    console.log("Els dos nombres són iguals");
//}

//let a=prompt("Escriu el primer número");
//let b=prompt("Escriu un segon número");
//a=Number(a);
//b=Number(b);
//let major= a > b ? a : (b > a ? b : "Els dos nombres són iguals");
//console.log("El més gran és: ", major);



//11.3.- Escriu un programa que demani dues paraules (fent servir la instrucció prompt) i ens digui si les dues paraules són iguals.

//paraula_1=prompt("Escriu una paraula");
//paraula_2=prompt("Escriu una segona paraula");
//if(paraula_1===paraula_2){
//    console.log(paraula_1, "i", paraula_2, "són iguals");
//}else{
//    console.log(paraula_1, "i", paraula_2, "NO són iguals");
//}



//Problemes


//12.1.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt() escrigui a la consola el doble, 
//el triple i el quadrat del número llegit.

//let número=prompt("Escriu un número: ");
//número=Number(número);
//console.log("El doble del número introduït és:", 2*número);
//console.log("El triple del número introduït és:", 3*número);
//console.log("El quadrat del número introduït és:", número**2)



//12.2.- Fes un programa en JavaScript que calculi el perímetre i l’àrea d’un rectangle de 20 i 80 metres de costat. 
//Modifica el programa perquè els valors dels costats es demanin amb prompt().  

//let alçada=20
//let amplada=80
//console.log("El perímetre d'aquest rectangle és:", amplada*2+alçada*2)


//let amplada=prompt("Escriu l'amplada del rectangle: ");
//let alçada=prompt("Escriu l'alçada del rectangle: ");
//amplada=Number(amplada);
//alçada=Number(alçada);
//console.log("El perímetre del rectanlge és de:", 2*amplada+2*alçada,"unitats", "i l'àrea del rectangle és de:", amplada*alçada,
//    "unitats^2")



//12.3.- Fes un programa que, donat el radi d’una circumferència, calculi, a una nova variable i escrigui a la consola, 
//la longitud de la circumferència i l’àrea del cercle. Fes servir una constant per guardar el número pi (3,141593) 
//a) Longitud de la circumferència: 2 * 3.1416 * ràdio b) Àrea del cercle: 3.1416 * radio^2  

//let pi=3.141593
//radi=prompt("Dona'm la mesura d'un radi: ");
//radi=Number(radi);
//let longitud=2*pi*radi
//let Àrea_del_cercle= pi*radi**2
//console.log("La longitud de la circumferència és de:", longitud, "unitats", "i, l'àrea del cercle és de", Àrea_del_cercle, "unitats^2")



//12.4.- Escriu un programa en JavaScript que calculi el sou mensual a partir del nombre d’hores treballades (160 hores) i
//el preu per hora treballada (12€). Prova amb altres valors. 

//let sou=160*12
//console.log("El sou mensual que ha guanyat Manolete és de:", sou, "euros");
//let preu_hora=prompt("Escriu el sou que guanyes per hora en euros: ");
//let hores_treballades=prompt("Escriu el total d'hores que treballes mensualment: ");
//preu_hora=Number(preu_hora);
//hores_treballades=Number(hores_treballades);
//console.log("El teu sou mensual arrel del sou/hora i les hores treballades totals és de:", preu_hora*hores_treballades, "euros")


