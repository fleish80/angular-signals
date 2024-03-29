import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { JokeCustomStoreService } from './joke-custom-store.service';

@Component({
  selector: 'df-joke-custom',
  standalone: true,
  imports: [CommonModule, MatButton],
  template: `
    @if (this.loading()) {
      <p>Loading...</p>
    } @else {
      <p *ngIf="!this.error()">{{ this.joke()!.value }}</p>
      <p *ngIf="this.error()">{{ this.error()!.message }}</p>
    }
    <button (click)="loadAnotherJoke()" mat-raised-button color="primary">Load Another Joke</button>
  `,
  styles: []
})
export default class JokeCustomComponent {
  #jokeCustomStoreService = inject(JokeCustomStoreService);
  joke = this.#jokeCustomStoreService.joke;
  loading = this.#jokeCustomStoreService.loading;
  error = this.#jokeCustomStoreService.error;

  loadAnotherJoke() {
    this.#jokeCustomStoreService.loadJoke();
  }
}
