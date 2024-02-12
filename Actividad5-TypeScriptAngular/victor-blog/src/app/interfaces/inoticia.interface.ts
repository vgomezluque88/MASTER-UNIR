// Se genera con este comando:
//  ng generate interface interfaces/INoticia --type=interface   

export interface INoticia {
    //Meter todas las caracteristicas de noticias
    titulo: string;
    urlFoto: string;
    textoNoticia: string;
    fechaPublicacion: Date;
    //El ? es para que no sea obligatorio
    autor?: string;
}
