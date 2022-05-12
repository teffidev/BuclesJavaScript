const prompt = require ('prompt-sync')({sigint: true})

// /*Imprime todos los elementos de un arreglo*/
let recorrerArreglo = x => {
    for (let i = 0; i < x.length; i++) {
        console.log(`En la posición ${i} se encuentra ${x[i]}`)
    }
}
console.log(recorrerArreglo(["Pedro", "Pablo", "Maria", "Juan", "Diana"]))


// /*Calcula el porcentaje de un numero.*/
let porcentaje = (num1, num2) => {
    let resultado = num1 * num2 / 100
    return resultado
}
let porcentajeIf = num => {
    if (num > 500) {
        return porcentaje(58, num)
    }
}
console.log(porcentajeIf(520));


/*Imprime el elemento en la posición 3 de un arreglo, 
si no lo encuentra retorna -1*/
const notas = [8, 6, 7, 9]
const edad = [25, 30, 28, 21]

let retornaElemento = x => {
    if (x[3]) {
        return x[3]
    }else{
        return -1
    }
}
console.log(`En la posición 3 de las notas esta el valor: ${retornaElemento(notas)}`)
console.log(`En la posición 3 de la edad esta el valor: ${retornaElemento(edad)}`);


/*Cuantos digitos me faltan para que un numero dado de 2 cifras, 
llegue a ser uno de tres cifras.*/
let numDosCifras = () =>{
    let num = prompt('Ingrese un numero de maximo dos cifras: ')
    if (num > 99) {
        return 'Error! Ingrese un numero de maximo dos cifras'
    }else if (num >= 0) {
        if (num <= 10) {
            cifraFaltante = 10 - num
            return `Para ser un numero de dos cifras te faltan ${-cifraFaltante} unidades`
        } else {
            cifraFaltante = 100 - num
            return `Para ser un numero de tres cifras te faltan ${-cifraFaltante} unidades`
        }    
    }else{   
        if(number > -10){
            cifraFaltante = (10 + +number) * -1
            return `Para ser un número de dos cifras te faltan ${cifraFaltante} unidades`
        }else{
            cifraFaltante = (100 + +number) * -1
            return `Para ser un número de tres cifras te faltan ${cifraFaltante} unidades`
        }
    }        
}
console.log(numDosCifras());


/*Encontremos el promedio de las notas.*/
let promedioNotas = notas => {
    let numNotas = notas.length
    let suma = 0
    for (let i = 0; i < numNotas; i++) {
        suma = suma + notas[i]            
    }
    return suma / numNotas
}
console.log(promedioNotas([7, 8, 6, 5, 9]));


/*Suma todos los numeros consecutivos hasta llegar al numero
maximo entregado.*/
let sumaConsecutivos = x => {
    let i = 1
    let resultado = 0

    for (let i = 0; i <= x; i++) {
        resultado = resultado + i
    }
    return resultado
}
sumaConsecutivos(100)
console.log(sumaConsecutivos(100));
