import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlitchFreeAdvancedRxjsService {

  count$ = new BehaviorSubject(1000);

  double$ = this.count$.pipe(map((count) => {
    const res = count * 2;
    console.log('calculating double ', res);
    return res;
  }));

  triple$ = this.count$.pipe(map((count) => {
    const res = count * 3;
    console.log('calculating triple ', res);
    return res;
  }));

  combined$ = combineLatest([this.double$, this.triple$]).pipe(
    map(([double, triple]) => {
      console.log('calculating combined ', double, ' ', triple);
      return double + triple;
    })
  );

  over9000$ = this.combined$.pipe(map((combined) => {
    console.log('calculating over9000$ ', combined);
    return combined > 9000
  }));

  message$ = this.over9000$.pipe(
    map((over9000) => (over9000 ? 'It\'s over 9000!' : 'It\'s under 9000.'))
  );

  increment() {
    this.count$.next(this.count$.value + 1000);
  }
}
