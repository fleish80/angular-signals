import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

export const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  #http = inject(HttpClient);

  getTodos() {
    return this.#http.get<Todo[]>(TODOS_URL);
  }
}
