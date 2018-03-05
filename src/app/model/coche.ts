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

  constructor(  marca: string,
                modelo: string,
                puertas?: number,
                foto: string = 'coche_default.jpg',
                version?: string,
                caballos?: number,
                consumo?: number) {

    console.log('User Constructor');

    this.id = -1;
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.version = version;
    this.foto = (foto.charAt(0) === 'h') ? foto : 'assets/img/' + foto;
    this.caballos = caballos;
    this.consumo = consumo;
  }
}
