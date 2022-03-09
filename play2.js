// Objeto gato

let gatoWhiskas = {
    nombre: "Whiskas",
    edad: 3,
    vacunaRabia: true,
    vacunaTripleGatuna: false,
    comidasFavoritas: ["pollo", "lagartijas"],
    'color-ojos': "azul"
};

// mostrar objeto por el terminal
console.log(gatoWhiskas);

// Acceder a una de las propiedades del objeto
console.log(gatoWhiskas.nombre);
console.log(gatoWhiskas["nombre"]);

// Acceder al color de ojos

console.log(gatoWhiskas["color-ojos"]);

// Escribeme un console.log que muerte por el terminal la ultima comida favorita del gato whiskas

//console.log(gatoWhiskas["comidasFavoritas"][0, 1]);

// Quiero actualizar la edad del gato 

gatoWhiskas.edad++;
console.log(`El gato a cumplido años y ahora tiene ${gatoWhiskas.edad} años`);

// Reto: Whiskas tiene una nueva comida favorita, la banana. Actualiza el objeto gato whiskas para añadir nueva comida favorita.

console.log("nuevas comidas favoritas", gatoWhiskas["comidasFavoritas"].push("bananas"));
console.log(gatoWhiskas);