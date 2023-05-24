let num = prompt('Introduzca un número');

if (num %4 == 0 && num %100 == 0) {
    if (num %400 == 0)
    console.log('Es bisiesto');
} else {
    console.log('No es bisiesto');
}