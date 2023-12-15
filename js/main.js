//Practica para segunda preentrega

let tamaño = prompt("Ingrese el tamaño del foami que busca");
let modelo = prompt("Ingrese el modelo de foami que busca");
let color = prompt("Ingrese el color de foami que busca");
let precio = prompt("Ingrese precio estimado que busca");

const datosBusqueda = {
    tamaño: tamaño,
    modelo: modelo,
    color: color,
    precio: precio,
}

function mostrarFoamis(foamis){
    foamis.forEach((foami) =>{
        let respuesta = document.querySelector("ul");
        respuesta.innerHTML += (foami.modelo + " - " + foami.tamaño + " - " + foami.color + " - " + foami.precio)
    });
}

function filtrarTamaño (foami) {
    if (datosBusqueda.tamaño) {
        return foami.tamaño === datosBusqueda.tamaño;
    }else {
        return foami;
    }
};

function filtrarModelo (foami) {
    if (datosBusqueda.modelo) {
        return foami.modelo === datosBusqueda.modelo;
    }else {
        return foami;
    }
};

function filtrarColor (foami) {
    if (datosBusqueda.color) {
        return foami.color === datosBusqueda.color;
    }else {
        return foami;
    }
};

function filtrarPrecio (foami) {
    if (datosBusqueda.precio) {
        return foami.precio === datosBusqueda.precio;
    }else {
        return foami;
    }
};

function filtrarFoamis() {
    const resultado = foamis.filter(filtrarTamaño)
    .filter(filtrarModelo)
    .filter(filtrarColor)
    .filter(filtrarPrecio);

    if(resultado.length>0)
    {
        mostrarFoamis(resultado);
    }else {
        alert("No se encontraron foamis con esas caracteristicas")
    }
    
}
 
filtrarFoamis();