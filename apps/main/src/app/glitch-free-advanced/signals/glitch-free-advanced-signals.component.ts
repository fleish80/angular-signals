import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GlitchFreeAdvancedSignalsService } from './glitch-free-advanced-signals.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'df-glitch-free-advanced-signals',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule
  ],
  template: `
  <button (click)="increment()" mat-raised-button color="primary">+</button>
  <div>Count: {{count()}}</div>
  <div>Double: {{double()}}</div>
  <div>Triple: {{triple()}}</div>
  <div>Combined: {{combined()}}</div>
  <div>Message: {{message()}}</div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlitchFreeAdvancedSignalsComponent {

  #glitchFreeAdvancedSignalsService = inject(GlitchFreeAdvancedSignalsService);
  count = this.#glitchFreeAdvancedSignalsService.count;
  double = this.#glitchFreeAdvancedSignalsService.double;
  triple = this.#glitchFreeAdvancedSignalsService.triple;
  combined = this.#glitchFreeAdvancedSignalsService.combined;
  message = this.#glitchFreeAdvancedSignalsService.message;

  increment() {
    this.#glitchFreeAdvancedSignalsService.increment();
  }
}

