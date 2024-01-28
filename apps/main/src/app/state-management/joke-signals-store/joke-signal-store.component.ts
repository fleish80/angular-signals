import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { JokeSignalStore } from './joke-signal-store.service';

@Component({
  selector: 'df-joke-signals-store',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <p *ngIf="this.loading(); else jokeTemplate">Loading...</p>
    <ng-template #jokeTemplate>
      <p *ngIf="!this.error()">{{ this.joke()!.value }}</p>
      <p *ngIf="this.error()">{{ this.error()!.message }}</p>
    </ng-template>
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
