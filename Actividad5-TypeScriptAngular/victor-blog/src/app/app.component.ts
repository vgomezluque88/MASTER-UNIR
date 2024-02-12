import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticia } from './interfaces/inoticia.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'victor-blog';

  arrNoticias: INoticia[] = [{
    name: "Noticia 1",
    number: 19
  }]
}
