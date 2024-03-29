import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeBasicStoreService } from './joke-basic-store.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'df-joke-basic',
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
export default class JokeBasicComponent {
  #jokeBasicStoreService = inject(JokeBasicStoreService);
  joke = this.#jokeBasicStoreService.joke;
  loading = this.#jokeBasicStoreService.loading;
  error = this.#jokeBasicStoreService.error;

  loadAnotherJoke() {
    this.#jokeBasicStoreService.loadJoke();
  }
}
