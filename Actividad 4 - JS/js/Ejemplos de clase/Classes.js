class Coche {
  //Asi se crea una contstante privada, es decir que lo puedes leer pero no se puede cambiar.
  #bastidor;
  #velocidad;
  constructor(marca, modelo, bastidor) {
    this.marca = marca;
    this.modelo = modelo;
    //Se crear falso por defecto
    this.encendido = false;
    this.#bastidor = bastidor;
    this.velocidad = 0;
  }

  //Podemos crear metodos dentro de la clase coche.
  
  encender() {
    this.encendido = true;
  }
  
  acelerar() {
  if(this.encendido){
    this.#velocidad = this.#velocidad + 5;
  }else{
    console.log("esta parado");
      }
  }
  
   frenar() {
     if(this.#velocidad >=0)
    this.#velocidad = this.#velocidad - 5;
  }

  // Crear una metdo para mostrar bastidor.
  dameBastidor() {
    return this.#bastidor;
  }
}


//Herencia
// Para heredar una classe tienes que crear una clase con el extends de la clase padre. Es decir un descapotable es igual que un coche pues crea la clase Descapotable con el extends del coche

class Descapotable extends Coche{
  #descapotado;
    //Para llamar al constructor primero tienes que llamar al constructor del padre, se hace con la palabra Super.
    constructor(marca,modelo,bastidor){
      super(marca,modelo,bastidor);
      this.#descapotado = false;
    }
  
}





class Parking{
  
  #coches;
  constructor(){
    this.limite = 10;
    this.#coches = [];
  }
  
  añadirCoche(coche){
    this.#coches.push(coche);
  }
  
  
  // Este metodo es para sacar un coche, con la funcion filter.
  // Tu le pasas un bastidor por el metodo y al llamarlo con el filter, entonces en el array coches devolvera solo los coches que no coincidan con el bastidor pasado por el metodo. 
  retirarcoche(bastidor){
    this.#coches = this.#coches.filter(coche =>{
      return coche.dameBastidor() !== bastidor;
    });  }
  

  
  dameCoche(){
    return this.#coches;
  }
}



//Creo el parking y el coche
const parking = new Parking();
const uncoche = new Coche("audi", "A30", 123);
const undescapotable = new Descapotable("descapotao", "A4", 124);

// Llamo a los metodos 
parking.añadirCoche(uncoche);
parking.añadirCoche(undescapotable);

parking.dameCoche();
parking.retirarcoche(124);
parking.dameCoche();
