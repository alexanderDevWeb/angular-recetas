/* Clase para encapsular los atributos de una receta */
export class Usuario {

  // Atributos
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  avatar: string;
  sexo: Sexo;

  constructor(nombre: string) {
    console.log('User Constructor');
    this.id = -1;
    this.nombre = nombre;
    this.apellido = '';
    this.email = '';
    this.avatar = '/assets/img/user.png';
    this.sexo = Sexo.masculino;
  }
}

export enum Sexo {
  masculino = 0,
  femenino,
  indeterminado
}
