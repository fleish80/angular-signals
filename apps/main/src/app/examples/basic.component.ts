import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'df-basic',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  template: `
    <div>Counter is {{ counter() }}</div>
    <div>Double counter is {{ doubleCounter() }}</div>
    <button (click)="set()" mat-raised-button color="primary">Set</button>
    <button (click)="update()" mat-raised-button color="primary">Update</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BasicComponent {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log('counter = ', this.counter(), 'doubleCounter = ', this.doubleCounter()));
  }

  set() {
    this.counter.set(this.counter() + 1);
  }

  update() {
    this.counter.update(counter => counter + 1);
  }
}
