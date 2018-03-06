/* Clase para encapsular los atributos de una receta */
export class Receta {
  // Atributos
  id: number;
  nombre: string;
  descripcion: string;
  foto: string;
  likes: number;
  cocinero: string;
  isGlutenFree: boolean;
  ingredientes: string[];

  constructor(nombre: string,
    descripcion?: string,
    foto?: string,
    likes?: number,
    cocinero?: string,
    isGlutenFree?: boolean,
    ingredientes?: string[] ) {

    // console.log('Receta Constructor');

    this.id = -1;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.foto = foto;
    this.likes = likes;
    this.cocinero = cocinero;
    this.isGlutenFree = isGlutenFree;
    this.ingredientes = ingredientes;
  }

  addIngrediente(ingrediente: string) {
    this.ingredientes.push(ingrediente);
    console.log(this.ingredientes);
  }
}
