//Exercicis d’objectes

//Introducció

//Exemple guiat


//Bé, ara anem a fer un programa que faci servir objectes.
//Tenim una empresa que reparteix paqueteria entre diferents clients empresarials. Per a cada client
//guarda les següents dades:
//• Nom
//• Adreça
//• Deute // On guardarem el que tenim pendent de cobrar d’aquesta empresa
//A més tindrem dues operacions a fer amb l’empresa:
//• Incrementar el deute  quan l’empresa envia un paquet, el cost d’aquest enviament
//incrementa el deute pendent de l’empresa.
//• Tot pagat  Quan l’empresa paga a final de mes, el deute queda a zero
//Tenint aquesta informació ja podem fer la classe que farem servir per guardar les empreses:
class Empresa {
    constructor (nom,adreca){
        this.nom = nom;
        this.adreca = adreca;
        this.deute = 0; // Quan creem l'empresa té deute 0
    }
    incrementaDeute(n){
        this.deute += n;
    }
    totPagat(){
        this.deute = 0;
    }
}


//Per altra banda, tenim els paquets, dels quals guardem:
//• Empresa origen
//• Empresa destinació
//• Cost del paquet
//I la operació que podem fer amb aquests paquets és:
//• Un cop lliurat el paquet, carregar el cost a l’empresa origen.
//Ara podem definir la classe Paquet:


class Paquet {
    constructor(origen,destinacio,cost){
        this.origen = origen;
        this.destinacio = destinacio;
        this.cost = cost;
        this.lliurat = false;
    }
    lliuramentFet() {
        this.origen.incrementaDeute(this.cost);
        this.lliurat = true;
    }
}


//Fixem-nos en el mètode lliuramentFet()
//Aquest mètode crida al mètode incrementaDeute() de la classe Empresa. Això vol dir que la propietat
//origen serà de tipus Empresa.
//Teniu aquest exemple desenvolupat a
//https://codepen.io/ccasadom/pen/RwPJvdY?editors=0010
//He organitzat l’exemple amb 4 parts:
//1. Definició de les classes Empresa i Paquet tal i com en vist
//2. Definició de dues funcions per llistar totes les empreses i tots els paquets
//3. Definició de les dades que farem servir: Defineixo dues taules, una amb 3 empreses i una
//altra amb 4 paquets.
//4. El programa pròpiament dit. El programa és senzill perquè la majoria de la “feina” està
//fet a les classes i a les funcions ja definides.
//El programa fa tres coses:
//1. Un llistat per pantalla de les empreses i els paquets (per a veure que realment les dades
//estan guardares.
//2. El lliurament de dos paquets 
//3. Llistar de nou les empreses per veure com han afectat els lliuraments als deutes de les
//empreses.


//Exercicis que podeu fer vosaltres
//A partir del que ja tenim fet, us proposo dos exercicis:
//Un primer és fer un llistat de les empreses que tenen deutes pendents.
//Un segon és fer un llistat dels paquets pendents de ser lliurats. Aquest llistat ha d’incloure nom de
//l’empresa origen, nom de l’empresa final i cost que té l’enviament del paquet. 

