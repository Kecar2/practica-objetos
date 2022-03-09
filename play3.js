// Objeto gato
let gatoWhiskas = {
    nombre: "Whiskas",
    edad: 3,
    vacunaRabia: true,
    vacunaTripleGatuna: false,
    comidasFavoritas: ["pollo", "lagartijas"],
    "color-ojos": "azul",

    maullar: function() { // metodo 'maullar'
        console.log("miau!");
    },

    contarComidasFavoritas: function() {
        return this.comidasFavoritas.length;
    },

    estaCompletamenteVacunado: function() {

        if (this.vacunaRabia && this.vacunaTripleGatuna) {
            return true;    
        }else {
            return false;
        }   
}

}

gatoWhiskas.maullar();
console.log("Cuantas comidas favoritas tiene el gato: ", gatoWhiskas.contarComidasFavoritas()); 

console.log("Esta totalmente vacunado el gato? ");
console.log(gatoWhiskas.estaCompletamenteVacunado());

console.log("¿Esta totalmente vacunado el gato DESPUÉS DE VACUNARLO DE TRIPLEGATUNA?");
gatoWhiskas.vacunaTripleGatuna = true;
console.log(gatoWhiskas.estaCompletamenteVacunado()); 

