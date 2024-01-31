class Persona {
    name: string = "";
    age: number = 0;
    height: number = 0;
    private weight: number = 0;
    status: boolean = false;
    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    // Para sacer la funcion privada tienes que crear getters y setters


    //Setters
    pesar(weight: number): void {
        this.weight = weight;
    }

    //Getter
    evaluarPeso(): number {
        return this.weight;
    }

    saludar(): string {
        return `hola me llamo ${this.name}`;
    }
}


const victor = new Persona("victor", 26);
victor.pesar(50);
console.log(victor.saludar);

interface Ipersona {
    name: string;
    age: number;
    status: boolean;
}


// Para crear una clase con la interfaz que hemos creado se utiliza el implements, fallara hasta que no tenga las constantes de la interface implementadas en la classe
class PersonaImplement implements Ipersona {
    name: string = "";
    age: number = 0;
    status: boolean = false;
}