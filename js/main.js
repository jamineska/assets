/*Funccion crear botones
Pasos:
-usar una fuccion para pintar los botones dinamicamente
-el evento recoja el id creado (tag)
-capture el id boton y se lo pase a la funcion pintar
-recorrer el id y lo muestre en la consola
*/

const crearBotones=()=>{
    return ["Playa", "Pueblo", "Paseo", "Bugalows", "Puente","Direcciones", "Plaza"];
}

const arraytarjetasFiltradas= [
{
        src:"image/viajes/1.jpg",
        titulo: "Descanso junto al mar",
        descripcion: "Disfruta de las mejores playas tropicales y de aguas cristalinas",
        alt:"Playa paraíso",
        tag:["Playa", "Arena"],
},

    {
        src:"image/viajes/2.jpg",
        titulo: "Fantásticas vacaciones",
        descripcion: "Descanso esclusivo en medio del oceano y la naturaleza",
        alt:"Bungalows sobre el mar",
        tag:["Playa","Bugalows", "Puente"],
    },
        
    { 
        src:"image/viajes/3.jpg",
        titulo: "Ruta por el mundo",
        descripcion: "Explora los destino más icónico y emblemáticos del planeta",
        alt:"todas las direcciones",
        tag:["Pueblo", "Paseo", "Arena", "Bugalows","Direcciones"],
    },


    {
        src:"image/viajes/4.jpg",
        titulo: "Jardin maravilloso",
        descripcion: "Descruba la increíble historia y arquitetura de Sevilla",
        alt:"PLaza de España",
        tag:["Pueblo", "Paseo", "Puente","Direcciones", "Plaza"],
    },


    {
        src:"image/viajes/5.jpg",
        titulo: "Famoso puente",
        Descripcion: "Conozca nuestras rutas por el interior",
        alt:"Puente",
        tag:["Pueblo", "Paseo", "Puente"],

    },

    {
        src:"image/viajes/6.jpg",
        titulo: "Descubra las rutas por la costa",
        descripcion: "Para amantes del mar",
        alt:"Paseo por la orla", 
        tag:["Playa", "Pueblo", "Paseo", "Arena", "Plaza"],
    },

    {
        src:"image/viajes/7.jpg",
        titulo: "Ruta del vino",
        descripcion: "Visite las mejores bodegas",
        alt:"Pueblo",
        tag:["Pueblo", "Paseo", "Puente","Direcciones", "Plaza"],
    },
];



const button=document.createElement("button");
button.Type="button";
button.innerText= "Boton";
document.body.appendChild(button);
console.log(crearBotones);


boton.addEventListener("click",()=> {
  saludar("Paseo")   

});

boton.addEventListener("click",()=> {
  saludar("PLaya")   

});
boton.addEventListener("click",()=> {
  saludar("Bugalows")   

});



/*

const pintarBotones = () => {
    const listadoTags= crearBotones();
    const fragmento=document.createDocumentFragment();
 listadoTags.forEach(nombreTag=> {
    const boton =document.createElement("buton");
    boton.textContent= nombreTag // le asignamos el tagcomo ID al botón
    fragmento.appendChild(boton); //para que se vea en la mayoria de los navegadores
 });
*/
/*
//introducimos el fragmento completo en el div
contenedoresBotones.appendChild(fragmento); 
};

const mostrarImagenes = (filtradas) => {
  
    const galeria = document.querySelector("#galeria");   
    
    // Limpiamos la galería eliminando los hijos anteriores para que no se acumulen
    while (galeria.firstChild) {
        galeria.removeChild(galeria.firstChild);
    }

    // Recorremos el array de viajes filtrados
    filtradas.forEach(viaje => {
        //Creamos la tarjeta contenedora (el div padre)
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        
        const foto = document.createElement("img");
        foto.src = viaje.src;
        foto.alt = viaje.alt;

        const contenido = document.createElement("div");
        contenido.classList.add("tarjeta-contenido");
   
        const titulo = document.createElement("h3");
        titulo.textContent = viaje.Titulo;
     
        const descripcion = document.createElement("p");
        descripcion.textContent = viaje.Descripcion;
        
        contenido.appendChild(titulo);
        contenido.appendChild(descripcion);

        // Metemos la foto y el bloque de texto dentro de la tarjeta
        tarjeta.appendChild(foto);
        tarjeta.appendChild(contenido);

        // Finalmente, metemos la tarjeta completa dentro de la galería de la web
        galeria.appendChild(tarjeta);
    });
};*/