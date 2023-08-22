import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlitchFreeService {

  counter$ = new BehaviorSubject(0);
  isEven$ = this.counter$.pipe(map(value => value % 2 === 0));
  message$ = combineLatest([this.counter$, this.isEven$], (counter, isEven) => `${counter} is ${isEven ? 'even' : 'odd'}`).subscribe(console.log);

  update(counter: number) {
    this.counter$.next(counter);
  
  }
}
