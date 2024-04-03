// Lo primero que queremos es que se muestren en consola todas las tareas que tiene pendientes el usuario. O sea, que aún no están terminadas. Ordenarlas por prioridad (Alta, Media, Baja).
namespace mostrarTareas {

    interface Tareas {
        nombreTarea: string,
        prioridad: string,
    }

    const tareas: Tareas[] = [
        {nombreTarea: "Ordenar pieza", prioridad:"Media"},
        {nombreTarea: "Lavar ropa", prioridad:"Alta"},
        {nombreTarea: "Preparar la cena", prioridad:"Alta"},
    ];

    type ResultadoTareas = 
     | {tipo: "lista", tareas:Tareas}
     | {tipo: "no hay tareas"}

    function mostrarTareas (tareas:Tareas[]): string{
        for( let i = 0; i < tareas.length; i++){
            const tarea = tareas[i];
            
            switch (tarea.prioridad
                ){
                case "Alta": {
                    return `${tarea.nombreTarea} es una tarea con prioridad Alta`
                }
                case "Media": {
                    return `${tarea.nombreTarea} es una tarea con prioridad Media`
                }
                case "Baja": {
                    return `${tarea.nombreTarea} es una tarea con prioridad Baja`
                }
              
            }
        }

        return `No hay tareas pendientes`;
    }

   















}