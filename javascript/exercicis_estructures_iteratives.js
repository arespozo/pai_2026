//exercici 13.1-Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero.
// let numero = Number (prompt ("escriu un numero"));
// if (numero<0) {
//     console.log("el numero es negatiu"); 
// }
// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
//número llegit és parell” si el número es parell.
// let numero = Number (prompt("escriu un numero"));
// if (numero%2==0){
//     console.log("el numero es parell tolai");
// }

// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
// gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.
// let num1= Number (prompt("escriu un numero"));
// let num2= Number (prompt("escriu un altre numero") );
// if (num1>num2) {
//     console.log("el mes gran es: "+ num1);
// }
// if (num1<num2) {
//     console.log("el mes gran es: "+ num2);
// }

// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,
// entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 
// let mes = Number (prompt ("escriu un nombre del 1 al 12"));
// let enero = 1;
// let febrero = 2;
// let marzo = 3;
// let abril = 4;
// let mayo = 5;
// let junio = 6;
// let julio = 7;
// let agosto = 8;
// let septiembre = 9;
// let octubre = 10;
// let noviembre = 11;
// let diciembre = 12;
// if (mes==enero) {
//     console.log("el mes es"+ )
// }

// 14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
// número llegit és positiu” en cas contrari. 
// let numerito= Number (prompt ("escriu un numero"));
// if (numerito>0) {
//     console.log("el numero es positiu");
// } else {
//     console.log("el numero es negatiu")
// }

// 14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola
// quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així,
// comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el
// tercer.
// let num1= Number (prompt("escriu un numero"));
// let num2= Number (prompt("escriu un numero"));
// let num3= Number (prompt("escriu un numero"));
// if (num1>num2 && num1>num3) {
//     console.log("el mes gran es : "+num1);
// } else if (num2>num1 && num2>num3) {
//     console.log("el numero mes gran es : "+ num2);
// } else {
//     console.log("el numero mes gran es :"+ num3);
// }

// let num1= Number (prompt ("escriu un numero"));
// if (num1>0) {
//     console.log ("El número és positiu");

// } else if (num1<0){
//     console.log ("El número és negatiu");
// } else {
//     console.log ("El número és zero");
// }

// let dia= Number (prompt("Escriu un número del 1 al 7"));
// switch (dia){
//     case 1:
//         console.log("Dilluns");
//         break;
//     case 2:
//         console.log("Dimarts");
//         break;
//     case 3:
//         console.log("Dimecres");
//         break;
//     case 4:
//         console.log("Dijous");
//         break;
//     case 5:
//         console.log("Divendres");
//         break;
//     case 6:
//         console.log("Dissabte");
//         break;
//     case 7:
//         console.log("Diumenge");
//         break;
//     default:
//         console.log("selecciona un número del 1 al 7");
// }


// let N= Number (prompt("Escriu un número"));
// for (i=0; i<=N; i++) {
//     console.log(i);
// }


// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero

// let numero= Number (prompt("escriu un numero"));
// if (numero<0) {
//     console.log("el numero es negatiu");
// }

// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell.

// let num= Number (prompt("escriu numero"));
// if (num%2==0){
//     console.log("el numero es parell");

// }
// else {
//     console.log("es imparell");
// }



// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
// gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

// let num1= Number (prompt("escriu un numero"));
// let num2= Number (prompt("escriu un numero"));
// if (num1>num2){
//     console.log("el primer numero es mes gran");
// }
// if (num2>num1){
//     console.log("el numero 2 es mes gran");
// }

// 14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
// número llegit és positiu” en cas contrari. 

// let num= Number (prompt("escriu numero"));
// if (num<0){
//     console.log("el numero es negatiu");
// } else {
//     console.log("es positiu");
// }


// 14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona
// pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir
// si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

// let tecarnet= prompt("tens el carnet de conduir? respon amb (si/no)").toLowerCase();
// let alcholemia=  parseFloat(prompt("quin es el resultat de la tasa?"));
// if (tecarnet==="si" && alcholemia<0.25){
//     console.log("pot conduir");
// } else {
//     console.log("ni modo pot conduir");
// }


// 13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el resultat de restar al nombre més gran el nombre més petit.

// let num1= Number (prompt("escriu un num"));
// let num2= Number (prompt("escriu un num"));
// if (num1>num2) {
//     console.log(num1-num2);
// } else {
//     console.log(num2-num1);
// }

// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una
// quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que
// el cost total és de 30€ donat que el transport és gratis.
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que
// consistirà en l’introduït més 4.95€ en concepte de cost d’enviament. 

// let preu= Number (prompt("escriu el preu total de la compra"));
// if (preu<30){
//     console.log("com la compra es inferior a 30 pavenis el transport es free, el preu total a pagar és "+ preu);
// } else {
//     console.log("la compra supera els 30 pavenis així que el cost del transport és de 4.95 pavos, el preu a pagar es de: " + (preu+4.95));
// }

// 14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”
// Si totes les dades són correctes, escriurà el preu final.

// let envase = prompt("Cono (c) o terrina (t)?").toLowerCase().trim();
// let sabor = prompt("Sabor (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles):").toLowerCase().trim();

// let precio = 0;
// let datosCorrectos = true;

// // 1. Envase
// if (envase === "c") {
//     precio = 3.45;
// } else if (envase === "t") {
//     precio = 3.95;
// } else {
//     datosCorrectos = false;
// }

// // 2. Sabor
// if (sabor === "vainilla" || sabor === "xocolata") {
//     precio += 0;
// } else if (sabor === "turró" || sabor === "menta" || sabor === "oreo") {
//     precio += 0.5;
// } else if (sabor === "crema" || sabor === "gerds" || sabor === "ametlles") {
//     precio += 1;
// } else {
//     datosCorrectos = false;
// }

// // 3. Resultado
// if (datosCorrectos) {
//     console.log("Preu final: " + precio.toFixed(2));
// } else {
//     console.log("Error dades mal introduïdes");
// }

// 15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”.
// Si totes les dades són correctes, escriurà el preu final.

// let recipient= prompt("vols conus (c) o terrina (t)?").toLowerCase();
// let sabor= prompt("escull entre:vanilla, xocolata...").toLowerCase();
// let preubase= 0;
// let preufinal=0;
// let dadescorrectes= true;

// switch (recipient) {
//     case "c":
//         preubase+=3.45;
//         break;
//     case "t":
//         preubase+=3.95;
//         break;
//     default:
//         dadescorrectes=false;

    
// } 

// switch (sabor){
//     case "xocolata":
//     case "vainilla":
//         preufinal+=0;
//         break;
//     case "turró":
//     case "oreo":
//     case "menta":
//         preufinal+=0.5;
//         break;
//     case "crema":
//     case "gerds":
//     case "ametlles":
//         preufinal+=1;
//         break;
//     default:
//         dadescorrectes=false;
// }   

// if (dadescorrectes==true){
//     console.log("el preu final és: " + (preufinal+ preubase).toFixed(2));
// } else {
//     console.log("bro realment has posat els valors malament");
// }


//bucles for

// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el
// text “Estem fent bucles”. 

// for (let i=0; i < 10; i++) {
//     console.log("Estem fent bucle");
// }

// 16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
// nombres del 5 al 20.

// for (let i=5; i<=20;i++){
//     console.log(i);
// }

// 16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els
// nombres entre 1 i N.

// let N= Number(prompt("escribe un numero primo"));
// for (i=1; i<=N; i++){
//     console.log(i);
// }

// 16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial
// d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N

// let N= Number(prompt("numero primo"));
// let factorial=1;
// for (let i=1;i<=N;i++){
//     factorial*= i;
// }
// console.log(factorial);
    
// 16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M)
// calculi la suma de tots els números entre N i M (ambdós inclosos).

// let M= Number (prompt("numero chaval"));
// let N= Number (prompt("NUMERO mas pequeño"));
// let suma=0;
// for (let i=N; i<=M; i++){
//     suma+=i;
// }
// console.log(suma);

// 16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números
// parells entre 2 i N.

// let N= Number(prompt("numero primiko"));
// let suma=0;
// for (let i=2; i<=N; i+=2){
//     suma+=i;
// }
// console.log(suma);

// 16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de
// multiplicar de N.

// let N= Number (prompt("numerin primoo"));
// for (let i=1; i<=10; i++){
//     taula= i*N;
//     console.log(taula);
// }


// 16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números
// de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1

// let N= Number (prompt("escriu un numero"));
// for (let i=N; i>=1;i--){
//     console.log(i);
// }

// 16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*)

// let N= Number (prompt("escriu un numero"));
// let linea=""
// for (let i=1; i<=N; i++){
//     linea+="*";
   
// }
//  console.log(linea);

// 16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la
// següent:

// let N= Number (prompt("escriu un numero"));
// let M= Number (prompt ("escriu un numero"));
// let linea= "";
// let suma= 0
// let suma2=0
// for (let i=1; i<=M; i++){
//     linea+= N;
//     console.log(linea);
//     suma2+=Number(linea);
//     suma+=suma2;
// }
// console.log(suma);

//bucles while

// 17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el
// text “Estem fent bucles”. 
// let i=1
// while (i<=10){
//     console.log("Estem fent bucles");
//     i++;
// }


// 17.2.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els
// nombres del 5 al 20.

// let i=5;
// while (i<=20){
//     console.log(i);
//     i++;
// }



// 17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a
// la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa
// si N < 1

// let N= Number (prompt("escriu un numero"));
// let i=N+1;
// while (i>=1){
//     i--;
//     console.log(i);
// }


// 17.4.- Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número
// N donat.
// La seqüencià de Fibonnacci consisteix en la suma dels dos valors anteriors tenint en
// compte que els dos primers són 1 i 1.


// let N= Number (prompt("escriu un numero"));
// let i= 1;
// let a=1;
// let b=1;
// while (i<=N){
//     console.log(a);
//     let seguent= a + b;
//     a=b;
//     b=seguent;
//     i++;
    
// }


// 17.5.- Escriu un programa que, donats dos números N i M, escrigui en la consola la llista de
// multiplicacions N*1, N*2, N*3, N*4,...,N*M Per evitar problemes per la mida del resultat (en
// cas que N o M siguin molt grans) l’escriptura de multiplicacions s’ha d’aturar si el resultat és
// més gran que 999999 (faig servir l’espai com a separadors de milers per tal que quedi més
// clar el nombre).

// let N= Number(prompt("escriu un numero"));
// let M= Number(prompt("escriu un numero"));
// let i=0;
// while (i<=M){
//     i++;
//     let resultat= N*i;
//     console.log(resultat);
//     if (resultat>=999999){
//         break;
//     } 
// }

// 18.1.- Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola 10
// cops el text “Estem fent bucles”. 

// let i= 1;
// do {
//     console.log("estem fent bucles");
//     i++;
// } while (i<=10);


// 18.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
// nombres del 5 al 20.

// let i= 5;
// do {
//     console.log(i);
//     i++;
// } while (i<=20);


// 18.3.- Escriure un programa, fent servir la instrucció do-while, que, donat un número N,
// escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el
// que passa si N < 1.

// let N= Number (prompt("escriu un numero"));
// let i=N;
// do {
//     console.log(i);
//     i--;
// } while (i>=1);


// 18.4.- Escriu un programa que, donat un nombre N, ens digui si és primer. Un número és
// primer si només és divisible per 1 i per ell mateix (això implica que caldrà comprovar si hi ha
// algun número entre 1 i N que sigui divisor de N).

let N= Number (prompt("escriu un num"));
let primer= true;
let i=N-1;
do {
    if (N%i==0){
        primer= false;
        break;
    }
    i--;
} while (i>=2);
if (primer==true){
    console.log("el numero es primer");
} else{
    console.log("no es primer");
}