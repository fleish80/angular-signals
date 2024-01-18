import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeBasicStoreService } from './joke-basic-store.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'df-joke-rxjs',
  standalone: true,
  imports: [CommonModule, MatButton],
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
export default class JokeBasicComponent {
  #jokeBasicStoreService = inject(JokeBasicStoreService);
  joke = this.#jokeBasicStoreService.joke;
  loading = this.#jokeBasicStoreService.loading;
  error = this.#jokeBasicStoreService.error;

  loadAnotherJoke() {
    this.#jokeBasicStoreService.loadJoke();
  }
}
