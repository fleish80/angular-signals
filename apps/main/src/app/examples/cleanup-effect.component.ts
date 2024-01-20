import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'df-cleanup-effect',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Open the developer toolbar, navigate to the console tab, click on the ‘another route’ button, and
    observe the outcome</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CleanupEffectComponent {

  counter = signal(0);

  constructor() {
    effect((onCleanup) => {

      const interval = setInterval(() => {
        console.log(`1 second ago, the counter became ${this.counter()}`);
        this.counter.update(counter => counter + 1);
      }, 1000);

      onCleanup(() => {
        clearInterval(interval);
      });
    });
  }
}
