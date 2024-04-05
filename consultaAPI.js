"use strict";
//Los inversores se quejan que las tareas tardan mucho en cargarse. Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.
// Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. Podés usar el ejemplo que hicimos en clase.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var consultaAPI;
(function (consultaAPI) {
    const tareas = [
        { nombreTarea: "Ordenar pieza", prioridad: 1 },
        { nombreTarea: "Lavar ropa", prioridad: 2 },
        { nombreTarea: "Preparar la cena", prioridad: 3 },
        { nombreTarea: "Hacer la vianda para mañana", prioridad: 2 },
        { nombreTarea: "Terminar tarea de programacion", prioridad: 1 },
    ];
    function buscar() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 3000));
            return tareas.sort((a, b) => a.prioridad - b.prioridad);
        });
    }
    console.log("Tareas ordenadas por prioridad ", tareas);
})(consultaAPI || (consultaAPI = {}));
