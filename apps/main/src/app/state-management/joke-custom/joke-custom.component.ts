import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { JokeCustomStoreService } from './joke-custom-store.service';

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
  #jokeCustomStoreService = inject(JokeCustomStoreService);
  joke = this.#jokeCustomStoreService.joke;
  loading = this.#jokeCustomStoreService.loading;
  error = this.#jokeCustomStoreService.error;

  loadAnotherJoke() {
    this.#jokeCustomStoreService.loadJoke();
  }
}
