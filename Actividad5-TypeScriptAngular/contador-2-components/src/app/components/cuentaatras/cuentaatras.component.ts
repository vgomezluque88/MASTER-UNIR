import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuentaatras',
  standalone: true,
  imports: [],
  templateUrl: './cuentaatras.component.html',
  styleUrl: './cuentaatras.component.css'
})
export class CuentaatrasComponent {

  //@input es una funcion decoradora. Sirve para que sea una constante que la maneja el padre para poder moodificarla en otro componente
  @Input() numeroInicial: number = 100;
  intervalo: any;

  //Esto es un evento Personalizado que se le tira al componente padre.
  @Output() cuentraAtrasTerminado: EventEmitter<string> = new EventEmitter();
  // Seria como crear una funcion o un metodo en js
  comenzar() {
    this.intervalo = setInterval(() => {
      if (this.numeroInicial) {
        this.numeroInicial--;
      } else {
        // Limpia el intervalo
        clearInterval(this.intervalo);
        console.log("hola");
        // Asi se llama al output
        this.cuentraAtrasTerminado.emit('red');
      }
    }, 1000);
  }
}
