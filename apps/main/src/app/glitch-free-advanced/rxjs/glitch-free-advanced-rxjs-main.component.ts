import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { GlitchFreeAdvancedRxjsComponent } from './glitch-free-advanced-rxjs.component';

@Component({
  selector: 'df-glitch-free-advanced-rxjs-main',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe,
    GlitchFreeAdvancedRxjsComponent
  ],
  template: `
    <df-glitch-free-advanced-rxjs />
    <df-glitch-free-advanced-rxjs />
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
export default class GlitchFreeAdvancedRxjsMainComponent {

}

