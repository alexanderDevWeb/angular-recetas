import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  arrUsu: any[]=[];

  constructor() {
    console.log('Usuarioomponent constructor');
    this.usuario = new Usuario('Pepe');
    this.arrUsu.push(this.usuario);
    console.log(this.arrUsu);    
  }

  ngOnInit() {
  }

  newUser() {
    console.log('newUser()');
  }

}
