// Lo primero que queremos es que se muestren en consola todas las tareas que tiene pendientes el usuario. O sea, que aún no están terminadas. Ordenarlas por prioridad (Alta, Media, Baja).
namespace mostrarTareas {
    interface Tareas {
        nombreTarea: string,
        prioridad: number,
    }

    const tareas: Tareas[] = [
        { nombreTarea: "Ordenar pieza", prioridad: 1 },
        { nombreTarea: "Lavar ropa", prioridad: 2 },
        { nombreTarea: "Preparar la cena", prioridad: 3 },
        { nombreTarea: "Hacer la vianda para mañana", prioridad: 2 },
        { nombreTarea: "Terminar tarea de programacion", prioridad: 1 },
    ];

    tareas.sort((a, b) => a.prioridad - b.prioridad);
    console.log("Tareas ordenadas por prioridad ", tareas);

    // function mostrarTareas(tareas: Tareas[]): Tareas[] {
    //     const listaTareas: Tareas[] = [];
    //     for (let i = 0; i < tareas.length; i++) {
    //         const tarea = tareas[i];
    //         listaTareas.push(tarea.nombreTarea, tarea.prioridad);
    //         // switch (tarea.prioridad) {
    //         //     case 1: {
    //         //         console.log(`${tarea.nombreTarea} es una tarea con prioridad Alta`)
    //         //         listaTareas.push(tarea.nombreTarea);
    //         //     }
    //         //     case 2: {
    //         //         console.log(`${tarea.nombreTarea} es una tarea con prioridad Media`)
    //         //         listaTareas.push(tarea.nombreTarea);
    //         //     }
    //         //     case 3: {
    //         //         console.log(`${tarea.nombreTarea} es una tarea con prioridad Baja`)
    //         //         listaTareas.push(tarea.nombreTarea);
    //         //     }
    //         // }

    //     }

    //     return listaTareas.sort((a, b) => a.ta - b.age);
    // }

    // console.log(tareas);

}