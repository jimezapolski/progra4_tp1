"use strict";
//Ahora los inversores nos piden ver las tareas que tiene asignada cada persona. 
//Así que necesitamos que, dado una persona, se muestren solo sus tareas de igual manera que en el punto 1.
// ¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!
var asignaciones;
(function (asignaciones) {
    var nombresPorTareas = new Map();
    console.log("arranca vacio para cada nombre");
    console.log(nombresPorTareas);
    // console.log("Agrego una asociacion");
    // nombresPorTareas.set("jime", [{ pendiente: false, prioridad: 1 }, { pendiente: false, nombreTarea: "Hacer compras", prioridad: 1 }]);
    // console.log(nombresPorTareas);
    const asignarNombreYTareas = (mapa, nombre, tareas) => {
        let tareasAsignadas = mapa.get(nombre);
        if (tareasAsignadas === undefined) {
            tareasAsignadas = [];
        }
        tareasAsignadas.push(...tareas);
        mapa.set(nombre, tareasAsignadas);
    };
    asignarNombreYTareas(nombresPorTareas, "jime", [
        { pendiente: true, nombreTarea: "Revisar correo electrónico", prioridad: 3 }
    ]);
    asignarNombreYTareas(nombresPorTareas, "pepe", [
        { pendiente: true, nombreTarea: "Hacer la compra", prioridad: 1 },
        { pendiente: true, nombreTarea: "Preparar la cena", prioridad: 2 }
    ]);
    asignarNombreYTareas(nombresPorTareas, "jime", [
        { pendiente: true, nombreTarea: "Lavar la ropa", prioridad: 1 },
        { pendiente: true, nombreTarea: "Estudiar para el examen", prioridad: 2 }
    ]);
    console.log(nombresPorTareas);
})(asignaciones || (asignaciones = {}));
