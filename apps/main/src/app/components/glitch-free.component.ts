import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlitchFreeService } from '../../services/glitch-free.service';

@Component({
  selector: 'df-glitch-free',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>counter = {{counter}}</p>
  <button (click)="update()">update</button>
  `,
  styles: [],
})
export default class GlitchFreeComponent {

  counter = 0;
  #glitchFreeService = inject(GlitchFreeService);

  update() {
    this.#glitchFreeService.update(++this.counter);
  }
}
