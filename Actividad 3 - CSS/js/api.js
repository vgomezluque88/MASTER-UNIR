//Pagina javascript https://javascript.info/

// Utilizar addEventListener DomContentLoad

// Custom Event
// eventoVictor = new CustomEvent("nuevo evento");

// No utlizar style.css, si no añadir clases por js y tener el estilo de la classe en el css.


// Metodo Open js, para mostrar pestaña como popup


const alumnos =
    [{
        firstName: "Victor",
        lastname: "Gomez"

    }, {
        firstName: "Victor",
        lastname: "Gomez"

    }]


document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("#lista-alumnos");

    // Recorrer array
    alumnos.forEach(alumno => {

        // Crear elemento html
        const nuevoli = document.createElement("li");
        //Meter contenido dentro del li
        // Primera forma
        nuevoli.textContent = `${alumno.firstName} ${alumno.lastname}`;
        // Seguna forma 
        const { firstName, lastname } = alumno;
        nuevoli.textContent = `${firstName} ${lastname}`;

        lista.append(nuevoli);
    });
});


//`` template js 
// Estas dos constantes son las mismas
const hola = "gola" + alumnos.firstName + "de apellido" + alumnos.lastname
const hola1 = `Hola ${firstName} de apellido ${lastname}`


