import { HttpErrorResponse } from '@angular/common/http';
import { Joke } from '../joke.model';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { selectSignal } from '../../select-signal.util';
import { inject } from '@angular/core';
import { JokeService } from '../joke.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { tapResponse } from '@ngrx/operators';

type State = {
  joke: Joke | null;
  error: HttpErrorResponse | null;
  loading: boolean;
  loaded: boolean;
}

export const JokeSignalStore = signalStore({ providedIn: 'root' },
  withState<State>({
    joke: null,
    error: null,
    loading: false,
    loaded: false
  }),
  withComputed((store) => ({
    initLetters: selectSignal(() => store.joke()?.value.split(' ').map(word => word[0])),
  })),
  withMethods((store, jokeService = inject(JokeService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() => jokeService.getJoke()),
        tapResponse(({
          next: (joke) =>
            patchState(store, {
              joke,
              error: null,
              loading: false,
              loaded: true
            }),
          error: (error: HttpErrorResponse) =>
            patchState(store, {
              joke: null,
              error,
              loading: false,
              loaded: true
            })
        }))
      ))
  })),
  withHooks({
    onInit({ load }) {
      load();
    }
  })
);

