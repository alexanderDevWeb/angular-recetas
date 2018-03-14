import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { logging } from 'protractor';
import { Todo } from '../model/todo';
import { GLOBAL } from '../global';

// const END_POINT = 'https://jsonplaceholder.typicode.com';
const END_POINT = GLOBAL.enpoint;

@Injectable()
export class TodosService {
  constructor(public http: HttpClient) {
    console.log('TodosService constructor');
  }

  getTodos(): Observable<any> {
    const url = END_POINT + '/todos';
    // return this.http.get(this.url+'productos');
    console.log(`TodoService getTodos ${url}`);
    return this.http.get(url);
  }

  delete(id): Observable<any> {
    const url = END_POINT + '/todos/' + id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

  post(todo: Todo): Observable<any> {
    const url = END_POINT + '/todos/';
    console.log(`TodosService put ${url}`);

    const body = {
      // "id": todo.id,
      userId: todo.idUser,
      title: todo.title,
      completed: todo.completed
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, body, httpOptions);
  }
}
