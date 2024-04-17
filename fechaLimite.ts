// La forma de ordenar tareas por prioridad no está alcanzando para saber qué hacer a continuación.
// Ahora queremos que las tareas se muestren de nuevo como en el punto 1, donde las de Alta prioridad aparecen siempre primero. 
// Pero las demás van a, además, tener una fecha límite (deadline) que marca que debe completarse antes de cierto día. 
// Ordenarlas por la fecha límite que tenga cargada esa tarea.

namespace fechaLimite {
    interface Tareas {
        pendiente: boolean,
        nombreTarea?: string,
        prioridad: number,
        deadline: Date
    }

    const tareas: Tareas[] = [
        { pendiente: false, prioridad:3, deadline: new Date("2024-04-04")},
        { pendiente: false, nombreTarea: "Hacer compras", prioridad: 1, deadline: new Date("2024-04-10"),},
        { pendiente: true, nombreTarea: "Ordenar pieza", prioridad: 1, deadline: new Date("2024-04-10") },
        { pendiente: true, nombreTarea: "Lavar ropa", prioridad: 2, deadline: new Date("2024-04-14")},
        { pendiente: true, nombreTarea: "Preparar la cena", prioridad: 3, deadline: new Date("2024-04-16") },
        { pendiente: true, nombreTarea: "Hacer la vianda para mañana", prioridad: 2, deadline: new Date("2024-04-14")},
        { pendiente: true, nombreTarea: "Terminar tarea de programacion", prioridad: 1, deadline: new Date("2024-04-10") },
    ];


    function mostrarTareas(a: Tareas, b: Tareas): number {

        if (a.prioridad !== b.prioridad) {
            return a.prioridad - b.prioridad;
        }
        
        return a.deadline.getTime() - b.deadline.getTime();

    }

    tareas.sort(mostrarTareas);




}