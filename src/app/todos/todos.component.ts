import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  nuevaTarea: string;
  autoIncrement = 41;

  constructor(private todosService: TodosService) {
    console.log('TodosComponent constructor');
    this.todos = [];
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit');

    // Cargo las tareas
    this.cargarTareas();
  }

  cargarTareas() {
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
  }


  /**
   * mapea los resultados de formato json a objetos Todo
   * @param resultado
   */
  mapeo(resultado: any) {
    let todo: Todo;
    resultado.forEach(el => {
      todo = new Todo(el.title);
      todo.id = el.id;
      todo.idUser = el.idUser;
      todo.title = el.title;
      todo.completed = el.completed;

      this.todos.push(todo);
    });
  }

  // Versión con el array
  /* eliminarTarea(id) {
    console.log(id);

    this.todos.forEach((todo, i) => {
      if (todo.id === id) {
        this.todos.splice(i, 1);
        return false; // break
      }
    });
  } */


  // Versión Servicio Ander
  delete(todo: Todo) {
    console.log('TodosComponent delete %o', todo );

    this.todosService.delete(todo.id).subscribe(
      result => {
        this.cargarTareas();
      },
      error => {
        alert('No de pudo elimiar Tarea');
      }
    );
  }



  cambiarEstado(id) {
    this.todos.forEach((todo, i) => {
      if (todo.id === id) {
        this.todos[i].completed = !this.todos[i].completed;
        // todo.completed = !todo.completed;
        console.log(todo.completed);
        return false; // break
      }
    });
  }

  // Versión con el
  /* anadirTarea() {
    console.log(this.nuevaTarea);

    const tarea = new Todo(this.nuevaTarea);
    tarea.id = this.autoIncrement;

    // Asigno el id actual
    this.autoIncrement++;

    // Añado la tarea al array de tareas
    this.todos.unshift(tarea);
    console.log(this.todos);
  } */

  anadirTarea() {
    console.log('TodosComponent new ');
    const todo = new Todo(this.nuevaTarea);

    this.todosService.post(todo).subscribe(
      result => {
        console.log('TodosComponent new %o', result);
        this.cargarTareas();
      },
      error => {
        alert('No de pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
  }
}
