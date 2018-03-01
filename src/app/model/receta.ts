/* Clase para encapsular los atributos de una receta */
export class Receta {
  //Atributos
  id: number;
  nombre: string;
  descripcion: string;
  foto: string;
  likes: number;
  cocinero: string;
  isGlutenFree: boolean;
  ingredientes: string[];

  constructor(nombre: string, cocinero: string = "Anonimo") {
    console.log("Receta Constructor");
    this.id = -1;
    this.nombre = nombre;
    this.foto = "/assets/img/receta_default.jpg";
    this.likes = 0;
    this.cocinero = cocinero;
    this.descripcion =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto earum excepturi eum expedita laudantium corrupti, aspernatur quas maiores vitae? Provident vero dolor porro est quod voluptatum animi placeat obcaecati delectus.";
    this.isGlutenFree = false;
    this.ingredientes = [];
  }

  addIngrediente(ingrediente:string){
    this.ingredientes.push(ingrediente);
    console.log(this.ingredientes);
    
  }
}
