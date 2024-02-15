import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { GlitchFreeAdvancedSignalsComponent } from './glitch-free-advanced-signals.component';

@Component({
  selector: 'df-glitch-free-advanced-signals-main',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe,
    GlitchFreeAdvancedSignalsComponent
  ],
  template: `
    <df-glitch-free-advanced-signals />
    <df-glitch-free-advanced-signals />
  `,
  styles: `
    :host {
      margin-block-start: 50px;
      display: flex;
      gap: 50px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GlitchFreeAdvancedSignalsMainComponent {

}

