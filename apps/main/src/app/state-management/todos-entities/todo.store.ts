import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { Todo } from './todo.model';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { tapResponse } from '@ngrx/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { TodosService } from './todos.service';
import { setError, setLoaded, setLoading, withCallState } from '../joke-signal-store-feature/call-state.feature';
import { withEntities } from '@ngrx/signals/entities';

export type State = {
  todos: Todo[]
}
export const TodoStore = signalStore({ providedIn: 'root' },
  withState<State>({
    todos: []
  }),
  withCallState(),
  withEntities(),
  withMethods((store, todosService = inject(TodosService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => patchState(store, setLoading())),
        switchMap(() => todosService.getTodos().pipe(
          tapResponse({
            next: (todos) =>
              patchState(store, { todos }, setLoaded()),
            error: (error: HttpErrorResponse) =>
              patchState(store, { todos: [] }, setError(error))
          })))))
  })),
  withHooks({
    onInit({ load }) {
      load();
    }
  })
);
