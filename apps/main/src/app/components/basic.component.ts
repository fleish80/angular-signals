import { ChangeDetectionStrategy, Component, computed, effect, signal, untracked } from '@angular/core';
import { equal } from '../utils/equal.util';

@Component({
  selector: 'df-basic',
  standalone: true,
  imports: [],
  template: `
    <div>Counter is {{ counter() }}</div>
    <div>Double counter is {{ doubleCounter() }}</div>
    <button (click)="plus1()">+ 1</button>
    <button (click)="plus2()">+ 2</button>
    <button (click)="update()">Update</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BasicComponent {
  counter = signal(0);
  user = signal(0);

  doubleCounter = computed(() => this.counter() * 2);

  isEven = computed(() => this.counter() % 2 === 0, {equal});

  constructor() {
    effect(() => console.log('counter = ', this.counter()));
    effect(() => console.log('isEven0 = ', this.isEven(), 'counter0 = ,', untracked(this.counter)));
    effect(() => {
      console.log('isEven1 = ', this.isEven());
      untracked(() => console.log('counter1 = ', this.counter()));
    });
  }

  plus1() {
    this.counter.set(this.counter() + 1);
  }

  plus2() {
    this.counter.set(this.counter() + 2);
  }

  update() {
    this.counter.update(counter => counter + 1);
  }
}
