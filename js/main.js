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
const galeria = document.querySelector("#galeria");

/*
console.log(botones);
console.log(fotoCabecera);
console.log(frase);
console.log(galeria);*/



const crearBotones=["Playa", "Pueblo", "Paseo", "Bugalows", "Puente","Direcciones", "Plaza"];

const arraytarjetasFiltradas= [
{
        src:"image/viajes/viajes-1.jpg",
        titulo: "Descanso junto al mar",
        descripcion: "Disfruta de las mejores playas tropicales y de aguas cristalinas",
        alt:"Playa paraíso",
        tag:["Playa","Bugalows"],
},

    {
        src:"image/viajes/viajes-2.jpg",
        titulo: "Fantásticas vacaciones",
        descripcion: "Descanso esclusivo en medio del oceano y la naturaleza",
        alt:"Bungalows sobre el mar",
        tag:["Playa","Bugalows", "Pueblo"],
    },
        
    { 
        src:"image/viajes/viajes-3.jpg",
        titulo: "Ruta por el mundo",
        descripcion: "Explora los destino más icónico y emblemáticos del planeta",
        alt:"todas las direcciones",
        tag:["Pueblo", "Paseo", "Bugalows","Direcciones"],
    },


    {
        src:"image/viajes/viajes-4.jpg",
        titulo: "Jardin maravilloso",
        descripcion: "Descruba la increíble historia y arquitetura de Sevilla",
        alt:"PLaza de España",
        tag:["Pueblo", "Paseo", "Puente","Direcciones", "Plaza"],
    },


    {
        src:"image/viajes/viajes-5.jpg",
        titulo: "Famoso puente",
        Descripcion: "Conozca nuestras rutas por el interior",
        alt:"Puente",
        tag:["Pueblo", "Paseo", "Puente"],

    },

    {
        src:"image/viajes/viajes-6.jpg",
        titulo: "Descubra las rutas por la costa",
        descripcion: "Para amantes del mar",
        alt:"Paseo por la orla", 
        tag:["Playa", "Paseo", "Plaza"],
    },

    {
        src:"image/viajes/viajes-7.jpg",
        titulo: "Ruta del vino",
        descripcion: "Visite las mejores bodegas",
        alt:"Pueblo",
        tag:["Pueblo", "Paseo", "Puente","Direcciones", "Plaza"],
    },
];



function hacerBotonzitos() {
    crearBotones.forEach((elemento)=>{
        let boton = document.createElement('button');
        boton.textContent=elemento
        botones.append(boton);
        //console.log(boton);
    });
};
hacerBotonzitos(); //envocando la función


function tarjetitas(){
    arraytarjetasFiltradas.forEach((elemento)=>{
        let imagen = document.createElement('img');
        imagen.src=elemento.src
        imagen.alt=elemento.alt
        galeria.append(imagen);
        //console.log(boton);
});
};
tarjetitas(); //envocando la función



/*
boton.addEventListener("click",()=> {
  saludar("Paseo")   

});*/
