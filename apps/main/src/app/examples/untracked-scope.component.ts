import { ChangeDetectionStrategy, Component, effect, signal, untracked } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'df-untracked-scope',
  standalone: true,
  imports: [
    MatButton
  ],
  template: `
    <h2>Untracked may be scoped with help of an arrow function</h2>
    <div>Counter 1 is {{ counter1() }}</div>
    <div>Counter 2 is {{ counter2() }}</div>
    <button (click)="counter1Plus1()" mat-raised-button color="primary">Counter1 +1</button>
    <button (click)="counter2Plus1()" mat-raised-button color="primary">Counter2 +1</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UntrackedScopeComponent {
  counter1 = signal(0);
  counter2 = signal(0);


  constructor() {
    effect(() => console.log('counter1 = ', this.counter1(), 'counter2 = ',
      untracked(() => this.counter2())));
  }

  counter1Plus1() {
    this.counter1.update(counter => counter + 1);
  }

  counter2Plus1() {
    this.counter2.update(counter => counter + 1);
  }
}
