//Ahora los inversores nos piden ver las tareas que tiene asignada cada persona. 
//Así que necesitamos que, dado una persona, se muestren solo sus tareas de igual manera que en el punto 1.
// ¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!
namespace asignaciones {

    interface Persona{
        nombre: string,
        apellido: string
    }

    interface TareasPersona {
        nombrePersona: Persona,
        nombreTarea: string,
        prioridad: number,
    }
    type ResultadoBusqueda<T> =
        | { tipo: "exito", encontrado: T, tareas:TareasPersona }
        | { tipo: "no_encontrado" }

    function formatearResultado<T>(resultado: ResultadoBusqueda<T>): string {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado} y sus tareas son ${resultado.tareas.nombreTarea}`;
        else
            return `No se encontro nada`;
    }

    // const personas: ResultadoBusqueda<T> = { tipo: "exito", encontrado:"jime"  };
    // console.log(formatearResultado(personas));


}