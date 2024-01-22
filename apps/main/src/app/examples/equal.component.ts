import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { equal } from '../equal.util';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'df-equal',
  standalone: true,
  imports: [
    MatButton
  ],
  template: `
    <h2>Pay attention to the fact that isEvent is only triggered when its value is changed.</h2>
    <div>Counter is {{ counter() }}</div>
    <div>Is Even is {{ isEven() }}</div>
    <button (click)="plus1()" mat-raised-button color="primary">+ 1</button>
    <button (click)="plus2()" mat-raised-button color="primary">+ 2</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class EqualComponent {
  counter = signal(0);
  isEven = computed(() => this.counter() % 2 === 0, {equal});

  constructor() {
    effect(() => console.log('isEven = ', this.isEven()));
  }

  plus1() {
    this.counter.set(this.counter() + 1);
  }

  plus2() {
    this.counter.set(this.counter() + 2);
  }
}
