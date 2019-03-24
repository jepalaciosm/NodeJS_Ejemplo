let estudiante={
    nombre:"Juan",
    edad:25,
    notas:{
        matematicas:3,
        ingles:4,
        programacion:5
    }
};


let obtenerPromedio=(nota1,nota2,nota3)=>{
    return (nota1+nota2+nota3)/3;
}

// console.log(obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.programacion,estudiante.notas.ingles));

module.exports={
    estudiante,
    obtenerPromedio
};