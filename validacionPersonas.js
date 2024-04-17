"use strict";
// Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. 
// Necesitamos una función que valide si un texto es un nombre de persona válido o no. 
// Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.
var validacionPersonas;
(function (validacionPersonas) {
    const personaRegex = new RegExp(/[a-zA-Z]+(?: [a-zA-Z]+)?$/);
    let personasValidas = [
        "jime",
        "Jime Zapolski",
        "jimenaaaaaaaaaa",
    ];
    console.log("Probando los validos");
    personasValidas.forEach((a) => {
        console.log(personaRegex.test(a));
    });
    let personasInvalidas = [
        "1234j",
        "",
        "----",
    ];
    console.log("Probando los invalidos");
    personasInvalidas.forEach((a) => {
        console.log(personaRegex.test(a));
    });
})(validacionPersonas || (validacionPersonas = {}));
