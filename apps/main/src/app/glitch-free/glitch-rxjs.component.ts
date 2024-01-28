import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'df-glitch-rxjs',
  standalone: true,
  template: `
    <h2>Open dev toolbar, and see the behaviour of the rxjs combine latest operator</h2>
    <button (click)="update()" mat-raised-button color="primary">Update</button>
    <div>Counter is {{ counter$ | async }}</div>
    <div>Is Even is {{ isEven$ | async }}</div>
  `,
  imports: [
    AsyncPipe,
    MatButtonModule
  ]
})
export default class GlitchRxjsComponent {

  counter$ = new BehaviorSubject(0);
  isEven$ = this.counter$.pipe(map(value => value % 2 === 0));
  message$ = combineLatest([this.counter$, this.isEven$],
    (counter, isEven) => `${counter} is ${isEven ? 'even' : 'odd'}`);

  constructor() {
    this.message$
      .pipe(takeUntilDestroyed())
      .subscribe(value => console.log(value));
  }

  update() {
    this.counter$.next(this.counter$.value + 1);
  }
}
