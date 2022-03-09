let nodoImagen = {
    class: ["img-fluid"],
    src: "./img/logo.png"
}


let nodoLogo = {
    id: "logo",
    class: ["text-center", "header--logo"],
    textContent: "Mi logo",
    with: "500px",
    style: {
        display: "block"
    },

    children: [nodoImagen]
};

let document = {
    querySelector: function (selectorCSS) {
        console.log("Obtiene un nodo del arbol DOM con el selector CSS.....");
    }
}

console.log(nodoLogo);