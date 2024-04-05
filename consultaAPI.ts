//Los inversores se quejan que las tareas tardan mucho en cargarse. Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.
// Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. Podés usar el ejemplo que hicimos en clase.

namespace consultaAPI {
    
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

    async function buscar(): Promise<Tareas[]> {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return tareas.sort((a, b) => a.prioridad - b.prioridad)
        
    }

    console.log("Tareas ordenadas por prioridad ", tareas );


}