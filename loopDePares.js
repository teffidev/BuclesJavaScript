/*Crear una función que nos muestre por consola 
los numeros pares del 1 al 100=*/

const pares = () => {
    for(let i = 1; i <= 100; i++){
        if( i % 2 === 0)
        console.log(i);
    }
}
pares()


// for(let i = 1; i <= 100; i++){
//     if( i % 2 === 0)
//     console.log(i);
// }
