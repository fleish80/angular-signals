import { Component, computed, effect, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'df-glitch-signals',
  standalone: true,
  imports: [MatButton],
  template: `
    <h2>Open dev toolbar, and see the behaviour of combining signal</h2>
    <button (click)="update()" mat-raised-button color="primary">Update</button>
    <div>Counter is {{ counter() }}</div>
    <div>Is Even is {{ isEven() }}</div>
  `,
})
export default class GlitchSignalsComponent {
  counter = signal(0);
  isEven = computed(() => this.counter() % 2 === 0);
  message = computed(() => `${this.counter()} is ${this.isEven() ? 'even' : 'odd'}`);

  constructor() {
    effect(() => {
      console.log(this.message());
    });
  }

  update() {
    this.counter.update(counter => counter + 1);
  }
}
