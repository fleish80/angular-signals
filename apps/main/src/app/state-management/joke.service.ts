import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke.model';

export const JOKE_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  #http = inject(HttpClient);

  getJoke() {
    return this.#http.get<Joke>(JOKE_URL);
  }
}
