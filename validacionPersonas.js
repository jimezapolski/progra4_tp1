"use strict";
// Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. 
// Necesitamos una función que valide si un texto es un nombre de persona válido o no. 
// Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.
var validacionPersonas;
(function (validacionPersonas_1) {
    // interface Persona{
    //     nombre: string,
    //     apellido?: string
    // }
    function validacionPersonas(resultado) {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado}`;
        else
            return `No se encontro nada`;
    }
    const r1 = { tipo: "exito", encontrado: "Pepe" };
    console.log(validacionPersonas(r1));
    const r2 = { tipo: "exito", encontrado: ["nombre", "apellido"] };
    console.log(validacionPersonas(r2));
    const r3 = { tipo: "no_encontrado" };
    console.log(validacionPersonas(r3));
})(validacionPersonas || (validacionPersonas = {}));
