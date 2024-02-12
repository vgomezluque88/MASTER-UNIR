import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticia } from './interfaces/inoticia.interface';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'El Blog de Víctor';
}
