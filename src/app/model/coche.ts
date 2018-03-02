/* Clase para encapsular los atributos de una receta */
export class Coche {
  // Atributos
  id: number;
  marca: string;
  modelo: string;
  version: string;
  foto: string;

  // Características
  puertas: number;
  caballos: number;
  consumo: number;

  constructor(marca: string, modelo: string, version?: string, foto: string = 'coche_default.jpg') {
    console.log('User Constructor');
    this.id = -1;
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
    this.foto = 'assets/img/' + foto;
  }
}
