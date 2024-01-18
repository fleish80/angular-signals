import { HttpErrorResponse } from '@angular/common/http';
import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JokeService } from '../joke.service';
import { Joke } from '../joke.model';
import { equal } from '../equal.util';

interface State {
  joke: Joke | null;
  error: HttpErrorResponse | null;
  loading: boolean;
  loaded: boolean;
}

@Injectable({providedIn: 'root'})
export class JokeBasicStoreService  {
  #jokeService = inject(JokeService);
  #destroyRef = inject(DestroyRef);
  #state = signal<State>({
    joke: null,
    error: null,
    loading: false,
    loaded: false,
  });

  constructor() {
    this.loadJoke();
  }

  joke = computed(() => this.#state().joke, {equal});
  error = computed(() => this.#state().error, {equal});
  loading = computed(() => this.#state().loading, {equal});
  loaded = computed(() => this.#state(), {equal});

  #patch(partialState: Partial<State>) {
    this.#state.update((state) => ({
      ...state,
      ...partialState,
    }));
  }

  loadJoke() {
    this.#patch({ loading: true });
    this.#jokeService
      .getJoke()
      .pipe(
        tap({
          next: (joke) => {
            this.#patch({
              joke,
              loading: false,
              loaded: true,
              error: null,
            });
          },
          error: (error: HttpErrorResponse) => {
            this.#patch({
              joke: null,
              loading: false,
              loaded: true,
              error,
            });
          },
        }),
        catchError(() => EMPTY),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }
}
