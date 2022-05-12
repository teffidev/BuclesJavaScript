const prompt = require("prompt-sync")({ sigint: true });

// let edad = prompt('Ingresa tu edad: ')

// let saludar = prompt('Ingrese su nombre: ')

let lloviendo = prompt('Responda con un Si o un No. Esta lloviendo?: ')

if(lloviendo === 'Si'){
    console.log(`Debes esperar o llevar paraguas`);
}else if(lloviendo === 'No'){
    console.log('Puedes salir');
}else{
    console.log('Mejor no salir');
}

// console.log(`Hola ${saludar}, esta es tu edad ${edad}!`);



