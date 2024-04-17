// Lo primero que queremos es que se muestren en consola todas las tareas que tiene pendientes el usuario. O sea, que aún no están terminadas. Ordenarlas por prioridad (Alta, Media, Baja).
namespace mostrarTareas {
    interface Tareas {
        pendiente: boolean,
        nombreTarea?: string,
        prioridad: number,
    }

    const tareas: Tareas[] = [
        { pendiente: false, prioridad:1 },
        { pendiente: false, nombreTarea: "Hacer compras", prioridad: 1 },
        { pendiente: true, nombreTarea: "Ordenar pieza", prioridad: 1 },
        { pendiente: true, nombreTarea: "Lavar ropa", prioridad: 2 },
        { pendiente: true, nombreTarea: "Preparar la cena", prioridad: 3 },
        { pendiente: true, nombreTarea: "Hacer la vianda para mañana", prioridad: 2 },
        { pendiente: true, nombreTarea: "Terminar tarea de programacion", prioridad: 1 },
    ];

    // entrega anterior: 
    // tareas.sort((a, b) => a.prioridad - b.prioridad);
    // console.log("Tareas ordenadas por prioridad ", tareas);

    function mostrarTareas(a: Tareas, b: Tareas): number {

        if (a.pendiente && !b.pendiente) {
            return -1;
        }
        if (!a.pendiente && b.pendiente) {
            return 1;
        }
       
        return a.prioridad - b.prioridad;
    

    }

    tareas.sort(mostrarTareas);
    console.log("La lista de tareas pendientes ordenadas por prioridad: ", tareas);

}