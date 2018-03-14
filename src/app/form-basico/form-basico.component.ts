import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {

  //  HTML => [FormGroup]="formulario"
  formulario: FormGroup;
  fruta: string;

  constructor(private fb: FormBuilder) {

    // Crear fomrulario
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3) ]]
    });

    this.fruta = 'Banana';
   }

  ngOnInit() {
  }

  //  HTML => <form (submit)="enviar($event)"
    enviar() {
    console.log('Enviar Formulario, nombre=%s', this.formulario.controls.nombre.value);
    console.log(this.formulario);
    
  }

}
