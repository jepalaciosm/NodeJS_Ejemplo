// const estudiante1 = require('./calculos');
// console.log(estudiante1.estudiante);

// console.log(" El promedio del estudiante es: "+estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas,estudiante1.estudiante.notas.programacion,estudiante1.estudiante.notas.ingles));

// En consola se pone node datos

const {estudiante,obtenerPromedio} = require('./calculos');
const fs = require('fs');

console.log(estudiante);

console.log("El nombre del estudiante es: "+ estudiante.nombre);

console.log(" El promedio del estudiante es: "+obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.programacion,estudiante.notas.ingles));

let {nombre, edad: year, notas:{matematicas,ingles,programacion}}=estudiante;

console.log("El nombre del estudiante es: "+nombre);

console.log(" El promedio del estudiante es: "+obtenerPromedio(matematicas,programacion,ingles));

console.log("La edad del estudiante es: "+year);

let crearArchivo=(estudiante) =>{
    let texto = "El nombre del estudiante es" +nombre + "\n" +
            "ha tenido un promedio de "+obtenerPromedio(matematicas,programacion,ingles);

    fs.writeFile('promedio.txt',texto,(err)=>{
        if(err) throw(err);
        console.log("Se ha creado el archivo");
    })
}

crearArchivo(estudiante);