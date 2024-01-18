import { ChangeDetectionStrategy, Component, computed, effect, signal, untracked } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'df-untracked-scope',
  standalone: true,
  imports: [
    MatButton
  ],
  template: `
    <h2>Untracked may be scoped with the help of an arrow function</h2>
    <div>Counter is {{ counter() }}</div>
    <div>Double counter is {{ doubleCounter() }}</div>
    <button (click)="set()" mat-raised-button color="primary">Set</button>
    <button (click)="update()" mat-raised-button color="primary">Update</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UntrackedScopeComponent {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log('counter = ', this.counter(), 'doubleCounter = ', untracked(() => this.doubleCounter())));
    effect(() => console.log('doubleCounter = ', untracked(() => this.doubleCounter())));
  }

  set() {
    this.counter.set(this.counter() + 1);
  }

  update() {
    this.counter.update(counter => counter + 1);
  }
}
