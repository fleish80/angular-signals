import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeSignalsStoreService } from '../../services/joke-signals-store.service';

@Component({
  selector: 'df-joke-rxjs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="this.loading(); else jokeTemplate">Loading...</p>
    <ng-template #jokeTemplate>
      <p *ngIf="!this.error()">{{ this.joke()!.value }}</p>
      <p *ngIf="this.error()">{{ this.error()!.message }}</p>
    </ng-template>
    <button (click)="loadAnotherJoke()">Load Another Joke</button>
  `, 
  styles: [],
  providers: [JokeSignalsStoreService]
})
export default class JokeRxjsComponent {
  #jokeSignalsStoreService = inject(JokeSignalsStoreService);
  joke = this.#jokeSignalsStoreService.joke;
  loading = this.#jokeSignalsStoreService.loading;
  error = this.#jokeSignalsStoreService.error;

  loadAnotherJoke() {
    this.#jokeSignalsStoreService.loadJoke();
  }
}
