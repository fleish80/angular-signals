import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GlitchFreeAdvancedRxjsService } from './glitch-free-advanced-rxjs.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'df-glitch-free-advanced-rxjs',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule
  ],
  template: `
  <button (click)="increment()" mat-raised-button color="primary">+</button>
  <div>Count: {{count$ | async}}</div>
  <div>Double: {{double$ | async}}</div>
  <div>Triple: {{triple$ | async}}</div>
  <div>Combined: {{combined$ | async}}</div>
  <div>Message: {{message$ | async}}</div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlitchFreeAdvancedRxjsComponent {

  #glitchFreeAdvancedRxjsService = inject(GlitchFreeAdvancedRxjsService);
  count$ = this.#glitchFreeAdvancedRxjsService.count$;
  double$ = this.#glitchFreeAdvancedRxjsService.double$;
  triple$ = this.#glitchFreeAdvancedRxjsService.triple$;
  combined$ = this.#glitchFreeAdvancedRxjsService.combined$;
  message$ = this.#glitchFreeAdvancedRxjsService.message$;

  increment() {
    this.#glitchFreeAdvancedRxjsService.increment();
  }
}

