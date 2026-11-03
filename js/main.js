/*Funccion crear botones
Pasos:
-usar una fuccion para pintar los botones dinamicamente
-el evento recoja el id creado (tag)
-capture el id boton y se lo pase a la funcion pintar
-recorrer el id y lo muestre en la consola
*/

const botones = document.querySelector("#botones");
const fotoCabecera = document.querySelector("#fotoCabecera");
const frase = document.querySelector("#frase");
const galeria = document.querySelector("#tarjeta");

/*
console.log(botones);
console.log(fotoCabecera);
console.log(frase);
console.log(galeria);*/



const crearBotones = ["Playa", "Pueblo", "Paseo", "Bugalows", "Puente", "Direcciones", "Plaza"]; /*creamos el array en función de los tags*./


/*cremos nuetras tarjetas*/
const arraytarjetas = [
    {

        src: "image/viajes/viajes-1.jpg",
        titulo: "Descanso junto al mar",
        descripcion: "Disfruta de las mejores playas tropicales y de aguas cristalinas",
        alt: "Playa paraíso",
        tag: ["Playa", "Bugalows"],
    },

    {
        src: "image/viajes/viajes-2.jpg",
        titulo: "Fantásticas vacaciones",
        descripcion: "Descanso esclusivo en medio del oceano y la naturaleza",
        alt: "Bungalows sobre el mar",
        tag: ["Playa", "Bugalows", "Pueblo"],
    },

    {
        src: "image/viajes/viajes-3.jpg",
        titulo: "Ruta por el mundo",
        descripcion: "Explora los destino más icónico y emblemáticos del planeta",
        alt: "todas las direcciones",
        tag: ["Pueblo", "Paseo", "Bugalows", "Direcciones"],
    },


    {
        src: "image/viajes/viajes-4.jpg",
        titulo: "Jardin maravilloso",
        descripcion: "Descruba la increíble historia y arquitetura de Sevilla",
        alt: "PLaza de España",
        tag: ["Pueblo", "Paseo", "Puente", "Direcciones", "Plaza"],
    },


    {
        src: "image/viajes/viajes-5.jpg",
        titulo: "Famoso puente",
        Descripcion: "Conozca nuestras rutas por el interior",
        alt: "Puente",
        tag: ["Pueblo", "Paseo", "Puente"],

    },

    {
        src: "image/viajes/viajes-6.jpg",
        titulo: "Descubra las rutas por la costa",
        descripcion: "Para amantes del mar",
        alt: "Paseo por la orla",
        tag: ["Playa", "Paseo", "Plaza"],
    },

    {
        src: "image/viajes/viajes-7.jpg",
        titulo: "Ruta del vino",
        descripcion: "Visite las mejores bodegas",
        alt: "Pueblo",
        tag: ["Pueblo", "Paseo", "Puente", "Direcciones", "Plaza"],
    },
];

/*crearemos un "evento" que al disparar botones emite un mesaje referíndose al tag pinchado. para eso, hilamos nuestra id del boton que representa nuestro elemento del array*/
document.addEventListener('click', (ev) => {
    if (ev.target.matches("#botones button")) {
        console.log(ev.target.id)
        let boton = ev.target
        const tag = boton.id //hemos asignado al tag, el "id boton"
        let filtradas = filtrarImagenes(tag); /*llama la función que filtra las tarjetas y las guarda en una variable llamadas "filtradas"*/
        galeria.innerHTML ="" ;//para que las imágenes no se repitan.
        tarjetitas(filtradas); //llama la funcion que pinta las tarjetas filtradas
        
    }
});

//comprobando que funciona
/*function pintarGaleria(tag){
console.log(`haz pinchado en el boton con tag ${tag}`)
};
*/

function filtrarImagenes(id) {
    // console.log ("filtrando imagenes,tag");
    let imagenesFiltrados = arraytarjetas.filter(function (imagenes) {
        return imagenes.tag.includes(id);
    });
    return imagenesFiltrados;
};

//console.log(arraytarjetasFiltradas);



/* crear los botones en funcion del array [] */
function hacerBotonzitos() {
    crearBotones.forEach((elemento) => {
        let boton = document.createElement('button');
        boton.textContent = elemento;
        boton.id = elemento;
        botones.append(boton);
        //console.log(boton);

    });
};
hacerBotonzitos(); //envocando la función


function tarjetitas(arraytarjetas) {
    arraytarjetas.forEach((elemento) => {
        let imagen = document.createElement('img');
        imagen.src = elemento.src
        imagen.alt = elemento.alt
        tarjeta.append(imagen);
        //console.log(boton);

    });
};
tarjetitas(arraytarjetas); //envocando la función









