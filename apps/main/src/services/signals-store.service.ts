import { WritableSignal, signal } from '@angular/core';

export class SignalsStore<T> {
  protected state: WritableSignal<T>;

  constructor(initialState: T) {
    this.state = signal<T>(initialState);
  }

  patch(partialState: Partial<T>) {
    this.state.update((s) => ({
      ...s,
      ...partialState,
    }));
  }
}
