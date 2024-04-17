"use strict";
// Los usuarios de nuestra beta necesitan más información para terminar cada tarea. 
// Están pidiendo poder agregar o un campo de información o que puedan adjuntar un archivo. 
// Como no nos decidimos, vamos a permitirles que puedan cargar alguno de los dos.
// Mostrar de vuelta las tareas como en el punto 1. Si una tarea tiene la descripción en forma de campo de texto, mostrar esa descripción. Si tiene un archivo, mostrar un mensaje informando la ruta del mismo.
var descripciones;
(function (descripciones) {
    const tareas = [
        { pendiente: false, prioridad: 1 },
        { pendiente: false, nombreTarea: "Hacer compras", prioridad: 1 },
        { pendiente: true, nombreTarea: "Ordenar pieza", prioridad: 1 },
        { pendiente: true, nombreTarea: "Lavar ropa", prioridad: 2 },
        { pendiente: true, nombreTarea: "Preparar la cena", prioridad: 3 },
        { pendiente: true, nombreTarea: "Hacer la vianda para mañana", prioridad: 2 },
        { pendiente: true, nombreTarea: "Terminar tarea de programacion", prioridad: 1 },
    ];
    var tareasMasInfo = new Map();
    console.log("arranca vacio para cada tarea");
    console.log(tareasMasInfo);
    const asignatareasMasInfo = (mapa, info, tareas) => {
        let tareasConInfo = mapa.get(info);
        if (tareasConInfo === undefined) {
            tareasConInfo = [];
        }
        tareasConInfo.push(...tareas);
        mapa.set(info, tareasConInfo);
    };
    const infoArchivo = { type: "archivo", url: "/file......" };
    asignatareasMasInfo(tareasMasInfo, infoArchivo, [
        { pendiente: false, prioridad: 2 },
        { pendiente: true, nombreTarea: "Revisar el archivo", prioridad: 1 }
    ]);
    const infoDescripcion = { type: "campoInfo", texto: "esto es mas informacion" };
    asignatareasMasInfo(tareasMasInfo, infoDescripcion, [
        { pendiente: true, nombreTarea: "Hacer la compra", prioridad: 1 },
        { pendiente: true, nombreTarea: "Preparar la cena", prioridad: 2 }
    ]);
    console.log("Mapa de tareas con información adicional:");
    console.log(tareasMasInfo);
    function ordenarTareasPorPrioridad(mapa) {
        mapa.forEach((tareas) => {
            tareas.sort((a, b) => a.prioridad - b.prioridad);
        });
        for (let [info, tareas] of mapa) {
            if (info.type === "archivo") {
                console.log("Tiene un archivo adjunto: ", info.url);
            }
            else {
                console.log("Tiene un campo de informacion:", info.texto);
            }
            console.log("Su tarea es: ");
            for (let tarea of tareas) {
                console.log("  Nombre:", tarea.nombreTarea || "Sin nombre");
                console.log("  Pendiente:", tarea.pendiente);
                console.log("  Prioridad:", tarea.prioridad);
            }
            console.log("------");
        }
    }
    ordenarTareasPorPrioridad(tareasMasInfo);
    console.log(tareasMasInfo);
})(descripciones || (descripciones = {}));
