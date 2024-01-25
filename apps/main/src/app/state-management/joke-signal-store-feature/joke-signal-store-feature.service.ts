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
import { setError, setLoaded, setLoading, withCallState } from './call-state.feature';

type State = {
  joke: Joke | null;
}

export const JokeSignalFeatureStore = signalStore({ providedIn: 'root' },
  withState<State>({
    joke: null
  }),
  withCallState(),
  withComputed((store) => ({
    initLetters: selectSignal(() => store.joke()?.value.split(' ').map(word => word[0]))
  })),
  withMethods((store, jokeService = inject(JokeService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => patchState(store, setLoading())),
        switchMap(() => jokeService.getJoke().pipe(
          tapResponse(({
            next: (joke) => {
              patchState(store, { joke }, setLoaded());
            },
            error: (error: HttpErrorResponse) =>
              patchState(store, { joke: null }, setError(error))
          })))
        )))
  })),
  withHooks({
    onInit({ load }) {
      load();
    }
  })
);

