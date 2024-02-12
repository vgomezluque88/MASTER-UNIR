import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  // Para usar el two way data biding necesitamos la libreria FormsModule y la directiva ngModel.

  // Creamos un array con el con la interficie Inoticias, es decir todos los valores necesarios dentro de la noticia estaran interfaces/inoticia.
  arrNoticias: INoticia[] = [{
    'titulo': 'Descubrimiento de una Ciudad Subterránea en Marte',
    'urlFoto': 'https://s1.eestatic.com/2017/06/23/actualidad/actualidad_225989385_37264893_1706x960.gif',
    'textoNoticia': 'Científicos de la NASA han anunciado el descubrimiento de una antigua ciudad subterránea en Marte, revelando evidencia de lo que parece haber sido una civilización avanzada. Las estructuras incluyen lo que parece ser viviendas, sistemas de irrigación, y una gran plaza central. Este hallazgo, realizado gracias al rover Perseverance, cambia por completo nuestra comprensión de la vida en el sistema solar.Para una imagen relacionada, podrías buscar "ciudad subterránea antigua Marte" en Google Imágenes para encontrar representaciones artísticas de cómo podría verse esta ciudad.',
    'fechaPublicacion': new Date()
  }, {
    'titulo': 'La Primera Flor que Crece en el Espacio Exterior',
    'urlFoto': 'https://img.freepik.com/fotos-premium/flor-que-crece-espacio-exterior-planetas_972324-3050.jpg',
    'textoNoticia': 'A bordo de la Estación Espacial Internacional (EEI), los astronautas han logrado cultivar la primera flor completamente fuera de la Tierra, una especie modificada de girasol capaz de florecer en microgravedad. Este logro no solo es un paso adelante en la botánica espacial sino que también aporta esperanza y color al entorno de los astronautas, abriendo la puerta a futuras investigaciones sobre la vida vegetal en el espacio.Para una imagen representativa, imagina una flor de girasol brillando contra el telón de fondo de la Tierra vista desde el espacio. Buscar "flor girasol estación espacial" podría darte visualizaciones conceptuales de este evento.',
    'fechaPublicacion': new Date()
  }]

  // Creamos un elemento que sera el que capturara los valores del input.
  newNoticia: any = {
    'titulo': '',
    'urlFoto': '',
    'textoNoticia': '',
    'fechaPublicacion': null,
  }

  guardarDatos(): void {

    //Subimos la aficion nueva a nuestro array.


    if (this.newNoticia.titulo != "" && this.newNoticia.urlFoto != "" && this.newNoticia.textoNoticia != "" && this.newNoticia.fechaPublicacion != null) {
      this.arrNoticias.push(this.newNoticia);
      console.log(this.arrNoticias);
      this.newNoticia = {
        'titulo': '',
        'urlFoto': '',
        'textoNoticia': '',
        'fechaPublicacion': null,

      }

    } else {
      const divAlert = document.querySelector(".alertaDiv");
      if (divAlert != null) {
        divAlert.className = "alertaDiv activar";
        setTimeout(function () {
          divAlert.className = "alertaDiv ";
        }, 1000);
      }
    }
    // Una vez subimos el array hemos de vaciar la noticia, si no al guardar se guardarà la nueva pero perderemos al antigua
  }

  cargarDatos(): string {
    let html: string = "";
    this.arrNoticias.forEach((element: any) => {

      html += `<article class="sectionblog__article">`;
      html += `<img src="${element.urlFoto}">`;
      html += `<h2>${element.titulo}</h2>`;
      html += `<p class="content">${element.textoNoticia}</p>`;
      html += `</hr>`;
      html += `<p class>${element.fechaPublicacion}</p>`;
      html += `</article>`;

    });
    //El return tiene que ser los blogs con un template literal
    return html;
  }
}
