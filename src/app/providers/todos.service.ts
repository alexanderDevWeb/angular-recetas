import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { logging } from 'protractor';

const END_POINT = 'https://jsonplaceholder.typicode.com';
// const END_POINT = 'http://localhost:3000';

@Injectable()
export class TodosService {


  constructor(public http: HttpClient) {


    console.log('TodosService constructor');
    }

    getTodos(): Observable<any> {
      const url = END_POINT + '/todos?userId=2';
      // return this.http.get(this.url+'productos');
      console.log(`TodoService getTodos ${url}`);
      return this.http.get(url);
  }

}
