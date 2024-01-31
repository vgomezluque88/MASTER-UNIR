// Typescript introduce un concepto de interfaz, es un contrarto vinculante que obliga al programador a cumpllir lo que dice que va a tener la clase o elemento
// Al decirle a humano que su tipado es Ihumano signfica que las 4 constantes son obligatorias.
// Pareja al tener el ? no es obligatorio.
var humano = {
    name: 'victor',
    age: 26,
    email: 'vgomez@gomez.com',
    phone: 9963852741
};
// Me falla porque le falta el phone.
var humanoError = {
    name: 'victor',
    age: 26,
    email: 'vgomez@gomez.com',
};
