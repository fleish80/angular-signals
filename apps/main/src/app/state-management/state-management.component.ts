import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'df-state-management',
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
      <a routerLink="basic" routerLinkActive="active" mat-flat-button color="warn">Basic</a>
      <a routerLink="custom" routerLinkActive="active" mat-flat-button color="warn">Custom Infrastructure</a>
      <a routerLink="signals-store" routerLinkActive="active" mat-flat-button color="warn">Signals Store</a>

    </mat-toolbar>
    <router-outlet />

  `,
  styleUrl: './state-management.component.scss'
})
export default class StateManagementComponent {
}
