import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { JokeSignalFeatureStore } from './joke-signal-store-feature.service';

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
export default class JokeSignalStoreFeatureComponent {
  #jokeSignalFeatureStore = inject(JokeSignalFeatureStore);
  joke = this.#jokeSignalFeatureStore.joke;
  loading = this.#jokeSignalFeatureStore.loading;
  error = this.#jokeSignalFeatureStore.error;

  loadAnotherJoke() {
    this.#jokeSignalFeatureStore.load();
  }
}
