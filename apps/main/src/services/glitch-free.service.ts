import { Injectable, computed, signal, effect } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlitchFreeService {

  counter$ = new BehaviorSubject(0);
  isEven$ = this.counter$.pipe(map(value => value % 2 === 0));
  message$ = combineLatest([this.counter$, this.isEven$], (counter, isEven) => `${counter} is ${isEven ? 'even' : 'odd'}`).subscribe(value => console.log(value, 'rxJs'));

  counter = signal(0);
  isEven = computed(() => this.counter() % 2 === 0);
  message = computed(() => `${this.counter()} is ${this.isEven() ? 'even' : 'odd'}`);
 
  constructor() {

  effect(() => {
    console.log(this.message(), 'signals');
  });
  }

  update(counter: number) {
    this.counter$.next(counter);
    this.counter.set(counter);
  }
}
