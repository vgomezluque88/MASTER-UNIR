// Se genera con este comando:
//  ng generate interface interfaces/INoticia --type=interface   

export interface INoticia {
    //Meter todas las caracteristicas de noticias
    name: string;
    number: number;
    //El ? es para que no sea obligatorio
    emai?: string;

    // titulo:string:
    // Url Foto: string;
    // texto Noticia: string;
    // Fecha de publicación:Date;
}
