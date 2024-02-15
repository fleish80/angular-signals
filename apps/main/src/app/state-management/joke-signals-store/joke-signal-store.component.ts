import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { JokeSignalStore } from './joke-signal-store.service';

@Component({
  selector: 'df-joke-signals-store',
  standalone: true,
  imports: [CommonModule, MatButton],
  template: `
    @if (this.loading()) {
      <p>Loading...</p>
    } @else {
      <p *ngIf="!this.error()">{{ this.joke.value() }}</p>
      <p *ngIf="this.error()">{{ this.error()!.message }}</p>
    }
    <button (click)="loadAnotherJoke()" mat-raised-button color="primary">Load Another Joke</button>
  `,
  styles: []
})
export default class JokeSignalStoreComponent {
  #jokeSignalStore = inject(JokeSignalStore);
  joke = this.#jokeSignalStore.joke;
  loading = this.#jokeSignalStore.loading;
  error = this.#jokeSignalStore.error;

  loadAnotherJoke() {
    this.#jokeSignalStore.load();
  }
}
