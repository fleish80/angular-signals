import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlitchFreeAdvancedSignalsService {

  count = signal(1000);

  double = computed(() => {
    const res = this.count() * 2;
    console.log('calculating double ', res);
    return res;
  });
  triple = computed(() => {
    const res = this.count() * 3;
    console.log('calculating triple ', res);
    return res;
  });

  combined = computed(() => {
    console.log('calculating combined ', this.double() , ' ',  this.triple());
    return this.double() + this.triple();
  });

  over9000 = computed(() => {
    console.log('calculating over9000$ ', this.combined());
    return this.combined() > 9000
  });

  message = computed(() =>
    this.over9000() ? "It's over 9000!" : "It's under 9000."
  );

  increment() {
    this.count.update(count => count + 1000);
  }
}
