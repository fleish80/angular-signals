import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'df-basic',
  standalone: true,
  imports: [],
  template: `
    <div>Counter is {{ counter() }}</div>
    <div>Double counter is {{ doubleCounter() }}</div>
    <button (click)="set()">Set</button>
    <button (click)="update()">Update</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BasicComponent {
  counter = signal(0);

  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log('Counter is,', this.counter()));
  }

  set() {
    this.counter.set(this.counter() + 1);
  }

  update() {
    this.counter.update(counter => counter + 1);
  }
}
