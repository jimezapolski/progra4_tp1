"use strict";
//Ahora los inversores nos piden ver las tareas que tiene asignada cada persona. 
//Así que necesitamos que, dado una persona, se muestren solo sus tareas de igual manera que en el punto 1.
// ¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!
var asignaciones;
(function (asignaciones) {
    function formatearResultado(resultado) {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado} y sus tareas son ${resultado.tareas.nombreTarea}`;
        else
            return `No se encontro nada`;
    }
    // const personas: ResultadoBusqueda<T> = { tipo: "exito", encontrado:"jime"  };
    // console.log(formatearResultado(personas));
})(asignaciones || (asignaciones = {}));
