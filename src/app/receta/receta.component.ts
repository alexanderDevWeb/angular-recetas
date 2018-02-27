import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
  // atributos
  nombre: string;
  descripcion: string;
  foto: string;
  likes: number;
  cocinero: string;
  isGlutenFree: boolean;
  ingredientes: string[];
  show: boolean;

  constructor() {
    console.log('RecetaComponent constructor');
    this.nombre = 'Bocata de calamares';
    this.descripcion = 'Calamares del mismísimo cantábrico';
    this.foto =
      'https://cdn.pixabay.com/photo/2017/09/11/08/50/ink-2738296__340.jpg';
    this.likes = 50;
    this.cocinero = 'Karlos Argiñano';
    this.isGlutenFree = true;
    this.ingredientes = ['Calamares', 'Limón', 'Pan', 'Salsa Alioli'];
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLike() {
    console.log('Click!');
    this.likes++;
  }

  gluten() {
    console.log('HI');
    if (this.isGlutenFree) {
      return 'green';
    } else {
      return 'red';
    }
  }

  mostrar() {
    console.log(event);
    // $('#listIng').css('display','block');
    const elem = document.getElementById('listIng');
    const caret = document.querySelector('.ingredientes i');

    console.log(elem.style.display);

    if (elem.style.display === 'none'  ||  elem.style.display === ''  ) {
      elem.style.display = 'block';
    } else {
      elem.style.display = 'none';
    }

    caret.classList.toggle('fa-caret-up');
    caret.classList.toggle('fa-caret-down');
  }
}
