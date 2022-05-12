/*Dada la siguiente lista:
---Pasar a mayusculas todos los titulos de las mismas.*/

const movies = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.table(movies);

const nombrePeliculas = (peliculas) => {

    let arrayPelimayusculas = []
    for(let i = 0; i < peliculas.length; i++){
        //arrayPelimayusculas.push(peliculas[i].toUpperCase()) 
        arrayPelimayusculas[i] = peliculas[i].toUpperCase()
    }
    return arrayPelimayusculas
}
nombrePeliculas(movies)
console.table(nombrePeliculas(movies));