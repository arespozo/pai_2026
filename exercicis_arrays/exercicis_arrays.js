// let arr= [10,12,98];
// console.log(arr);
// let andy= new Array ("zero","u","dos");

// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.

// let arr= [];
// arr[0]= "Hola";
// arr[1]= "Adeu";
// console.log(arr);   

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula.

// let arr= [];
// arr[2]= "Nom";
// console.log(arr);
// arr[1]= ",";
// console.log(arr);

// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

// let taula = [23, 45, 98, 73];

// let suma0i2 = taula[0] + taula[2];
// console.log("Suma de les posicions 0 i 2:", suma0i2); // 23 + 98 = 121

// let sumaTotal = taula.reduce((acumulador, valorActual) => acumulador + valorActual, 0); // 239
// taula[6] = sumaTotal;

// console.log(" Contingut de la taula:", taula);  




// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
// prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
// taula a la consola.


// let numero= Number (prompt("escriu un numero:"));
// let doble= numero*2;
// let triple= numero*3;
// let taula= [doble,triple];
// console.log(taula);

// 21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
// emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
// multiplicació i la divisió dels dos valors introduïts.

// let numero1= Number (prompt("escriu un numero"));
// let numero2= Number (prompt("escriu un numero"));
// let suma= numero1 + numero2;
// let resta= numero1- numero2;
// let multiplicacio= numero1*numero2;
// let divisio= numero1/numero2;
// let taula= [suma,resta,multiplicacio,divisio];
// console.log(taula);

// 21.6.- Donada aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
// de la taula.
// *****
// Donada la definició d’aquesta taula:
// 

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log(taula[0], taula[taula.length -1], taula.at(-1));

// 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la
// taula, un a un.

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// for (let i=0; i<=taula.length; i++) {
//     console.log(taula.at(i));
// }


// 21.8.- Fes un programa que escrigui a la consola la suma tots els valors
// emmagatzemats a la taula.

let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let suma=0;

for (let i = 0; i < taula.length; i++) {
    suma+= taula[i];
}
console.log(suma);


