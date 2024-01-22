import { HttpErrorResponse } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SignalsStore } from './signals-store.service';
import { JokeService } from '../joke.service';
import { Joke } from '../joke.model';
import { selectSignal } from '../../select-signal.util';

interface State {
  joke: Joke | null;
  error: HttpErrorResponse | null;
  loading: boolean;
  loaded: boolean;
}

@Injectable({providedIn: 'root'})
export class JokeCustomStoreService extends SignalsStore<State> {
  #jokeService = inject(JokeService);
  #destroyRef = inject(DestroyRef);

  constructor() {
    super({
      joke: null,
      error: null,
      loading: false,
      loaded: false,
    });
    this.loadJoke();
  }

  joke = selectSignal(() => this.state().joke);
  error = selectSignal(() => this.state().error);
  loading = selectSignal(() => this.state().loading);
  loaded = selectSignal(() => this.state());

  loadJoke() {
    this.patch({ loading: true });
    this.#jokeService
      .getJoke()
      .pipe(
        tap({
          next: (joke) => {
            this.patch({
              joke,
              loading: false,
              loaded: true,
              error: null,
            });
          },
          error: (error: HttpErrorResponse) => {
            this.patch({
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
