import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuentaatrasComponent } from "./components/cuentaatras/cuentaatras.component";
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CuentaatrasComponent]
})
export class AppComponent {
  title = 'contador-2-components';
  color: string = "";

  finish($event: string): void {
    console.log("ola11");
    this.color = `background-color: $event;`
  }
}
