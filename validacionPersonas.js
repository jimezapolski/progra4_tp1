"use strict";
// Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. 
// Necesitamos una función que valide si un texto es un nombre de persona válido o no. 
// Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.
var validacionPersonas;
(function (validacionPersonas_1) {
    function validacionPersonas(resultado) {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado}`;
        else
            return `No se encontro nada`;
    }
    const r1 = { tipo: "exito", encontrado: "Jime" };
    console.log(validacionPersonas(r1));
    const r2 = { tipo: "exito", encontrado: ["nombre", "apellido"] };
    console.log(validacionPersonas(r2));
    const r3 = { tipo: "no_encontrado" };
    console.log(validacionPersonas(r3));
    // type ResultadoBusqueda =
    //         | { tipo: "exito", persona: Persona }
    //         | { tipo: "no_encontrado" }
    //     function armarMapa(personas: Persona[]): Map<string, Persona> {
    //         var ret = new Map<string, Persona>();
    //         for (let i = 0; i < personas.length; i++) {
    //             const persona = personas[i];
    //            if (persona.nombre === "nombre") {
    //                 if (!ret.has(persona.nombre))
    //                     ret.set(persona.nombre, persona);
    //             }
    //         }
    //         return ret;
    //     }
    //     function buscarPorNombre(nombre: string, usuariosMap: Map<string, Persona>): ResultadoBusqueda {
    //         const usuario = usuariosMap.get(nombre);
    //         if (usuario === undefined)
    //             return { tipo: "no_encontrado" };
    //         else
    //             return { tipo: "exito", persona };
    //     }
    //     // Pocos usuarios
    //     const personas: Persona[] = [
    //         { nombre: "Jime", apellido: "Zapolski" },
    //         { nombre: "Toto" },
    //         { nombre: "Lala", apellido: "Sanchez" } ,
    //     ];
})(validacionPersonas || (validacionPersonas = {}));
