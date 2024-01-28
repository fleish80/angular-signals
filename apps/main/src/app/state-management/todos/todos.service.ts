import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const TODOD_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  #http = inject(HttpClient);

  getJoke() {
    // return this.#http.get<Joke>(JOKE_URL);
  }
}
