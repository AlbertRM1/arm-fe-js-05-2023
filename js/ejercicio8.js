let numero1 = prompt('Introduzca el primer número');
let numero2 = prompt('Introduzca el segundo número');
let numero3 = prompt('Introduzca el tercer número');

if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log('El mayor es ' + numero1);
    } else {
        console.log('El mayor es ' + numero3);
    }
} if (numero2 > numero3) {
    console.log('El mayor es ' + numero2);
} else {
    console.log('El mayor es ' + numero3);
}