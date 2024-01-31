// Typescript introduce un concepto de interfaz, es un contrarto vinculante que obliga al programador a cumpllir lo que dice que va a tener la clase o elemento


// Crea una interfaz es un modelo a seguir que las constantes son valores obligatorios, para que una de estas constannte no sea obligatoria tienes que poner una ?
interface Ihumano {
    name: string,
    age: number,
    email: string,
    phone: number,
    pareja?: string
}


// Al decirle a humano que su tipado es Ihumano signfica que las 4 constantes son obligatorias.
// Pareja al tener el ? no es obligatorio.
let humano: Ihumano = {
    name: 'victor',
    age: 26,
    email: 'vgomez@gomez.com',
    phone: 9963852741
}

// Me falla porque le falta el phone.
let humanoError: Ihumano = {
    name: 'victor',
    age: 26,
    email: 'vgomez@gomez.com',
}