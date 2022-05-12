/*Crear una función que segun un numero dado nos indique
cuantos impares tiene: */

const contarImpares = (numero) => {
    let cantidad = 0;
    for(let i = 0; i <= numero; i ++){
        if(i %2 !==0){
            cantidad ++;
        }
    }
    return cantidad;
}
console.log(contarImpares(9)) 