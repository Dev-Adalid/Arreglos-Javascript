/*
2 variables
1 constante

mostrar la suma de las dos variables

*/

/*

let cantidadPersonas = prompt("ingresar cantidad de personas")
let precioMesa=38000;
let precioSilla=2000;
let precioTotal= precioMesa + precioSilla;

console.log(precioTotal/cantidadPersonas);

*/

/*
let edad = prompt("ingresar edad")
let nombre =prompt("ingresar nombre")
console.log( "Nombre: " + nombre + ". Edad: " + edad)
*/


/* Funciones de javascript*/

/*
1. Desarrolla una función que retorne la suma dos números.



function suma(num1,num2){
    return num1 +num2
}

console.log(suma(2, 2));
*/ 

/*2. Desarrolla una función que retorne la diferencia entre dos números.

function resta(num1,num2){
    return num1 - num2
}

console.log(resta(2,3))



const resta = (num1, num2 ) =>
{
    return num1 - num2
}

console.log(resta(2,6))

*/

/*Desarrolla una función que retorne la división entre dos números. Si el segundo
número es cero, deberá interrumpirse y mostrar el mensaje “No es posible dividir por
cero”.*/
/*
const division = (num1, num2) =>
{
    if(num2===0){
        return "No es posible dividir por cero"
    }
    return num1/num2
}
console.log(division(2,4))*/

/*Desarrolla una función que verifique si un número es par o impar.
const espar =(num1)=>
{
{
if(num1 % 2 === 0)
return"es par"
}
return "es impar"
}

console.log(espar(5))*/

/*Desarrolla una función que calcule el área de un triángulo.*/
/*
function triangulo(base, altura){
    return(base*altura)/2
}

console.log("el area del triangulo es :", triangulo(4, 8))*/

/*Desarrolla una función que convierta grados Celsius a Fahrenheit.*/
/*
ºF = ºC x 1.8 + 32*/
/*/
function grado_fahrenheit (gradocelsius)
{
    return(gradocelsius*1.8)+35
}
console.log(grado_fahrenheit)
*/

/**Agregá el valor null a la primera posición del arreglo de cadenas de texto.*/

/*
let muebles = ["mesa","silla","horno","cuchara"]
for(let i=4; i > 0 ; i--){
 console.log(i)
 console.log(muebles[i])
}
*/
/*numero[0] = null
console.log(numero) */ 
/*
console.log(precio.length);*/


/*Desarrolla un programa que reciba un arreglo de números y calcule la suma de
todos sus elementos. i = i + 1 */

/*
let muebles = [1,2,3,"cuchara"]
for(let i=4; i > 0 ; i--){
 console.log(i)
 console.log(muebles[i])
}



/*
  const numeros = [10, 30, 50, 70];
  let suma = 0;
 
  
  for (let i= 0; i <4; i++) {
      suma = suma + numeros[i];
      console.log(suma);
  }
  */

  /*Desarrolla un programa que reciba un arreglo de números y devuelva un nuevo
arreglo con los elementos multiplicados por 2.*/
/*
const numeros = [10, 30, 50, 70];
  
 let arregloNuevo = [];
  
  for (let i= 0; i <4; i++) {
      arregloNuevo [i] = numeros[i]*2;
      console.log(arregloNuevo[i])
  }
*/
/*Desarrolla un programa que reciba un arreglo de números y devuelva el número más
grande.*/
/*hacer*/
/*
const numeros = [10, 30, 50, 70];
let 
if (numeros[i]<numeros[i+1]) {

    console.log("");
    
    } else {
    
    console.log("");
    
    }
*/

/*Desarrolla un programa que reciba un arreglo de números y devuelva un nuevo
arreglo con los números pares.*/
/*
function ejercicio4 () {
    let arr = [10, 3, 8, 7, 1,  9]
    let numeroMayor= 0

   for (let i = 0; i< arr.length; i++) {
    let numero = arr [i]

    if (numeroMayor < numero){
        numeroMayor= numero

    }
    

   }
console.log("El numero mayor es:",  numeroMayor)   
}
*/
/*desarrolle un porgrama que pueda determinar cual es el elemento menor de un arreglo numerico*/
/*
function ejercicioadicional(){
let arr


}
**/
/*Desarrolla un programa que reciba dos arreglos de números y devuelva un nuevo
arreglo con los elementos comunes entre ambos arreglos.
*/

function ejercicioadicional(){
let arr1 =  [2, 3, 4];
let arr2 = [3, 3, 7];
let nuevoArr = []
let j=0
for (let i=0; i<arr.length; i++){
    if (arr1[i]===arr2[i]) 
    nuevoArr [j] = arr1[i]
    j= j+1
}
 
}
