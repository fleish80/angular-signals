import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'df-glitch-free-advanced',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  template: `
    <mat-toolbar color="warn">
      <a routerLink="rxjs" routerLinkActive="active" mat-flat-button color="warn">RXJS</a>
      <a routerLink="signals" routerLinkActive="active" mat-flat-button color="warn">Signals</a>

    </mat-toolbar>
    <router-outlet />

  `,
  styleUrls: ['./glitch-free-advanced.component.scss']
})
export default class GlitchFreeAdvancedComponent {
}
