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

  constructor(nombre: string, cocinero: string = 'Anonimo') {
    console.log('Receta Constructor');
    this.id = -1;
    this.nombre = nombre;
    this.foto = '/assets/img/marmitako.jpg';
    this.likes = 0;
    this.cocinero = cocinero;
    this.descripcion =
      // tslint:disable-next-line:max-line-length
      'Marmitako de Bonito o Atún. Hoy veremos como hacer un Marmitako en casa, una receta tradicional vasca muy típica del verano que es cuando se captura el bonito.';
    this.isGlutenFree = false;
    this.ingredientes = [];
  }

  addIngrediente(ingrediente: string) {
    this.ingredientes.push(ingrediente);
    console.log(this.ingredientes);
  }
}
