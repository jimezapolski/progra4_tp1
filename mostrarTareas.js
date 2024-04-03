// Lo primero que queremos es que se muestren en consola todas las tareas que tiene pendientes el usuario. O sea, que aún no están terminadas. Ordenarlas por prioridad (Alta, Media, Baja).
var mostrarTareas;
(function (mostrarTareas_1) {
    var tareas = [
        { nombreTarea: "Ordenar pieza", prioridad: "Media" },
        { nombreTarea: "Lavar ropa", prioridad: "Alta" },
        { nombreTarea: "Preparar la cena", prioridad: "Alta" },
    ];
    function mostrarTareas(tareas) {
        for (var i = 0; i < tareas.length; i++) {
            var tarea = tareas[i];
            switch (tarea.prioridad) {
                case "Alta": {
                    return "".concat(tarea.nombreTarea, " es una tarea con prioridad Alta");
                }
                case "Media": {
                    return "".concat(tarea.nombreTarea, " es una tarea con prioridad Media");
                }
                case "Baja": {
                    return "".concat(tarea.nombreTarea, " es una tarea con prioridad Baja");
                }
            }
        }
        return "No hay tareas pendientes";
    }
})(mostrarTareas || (mostrarTareas = {}));
