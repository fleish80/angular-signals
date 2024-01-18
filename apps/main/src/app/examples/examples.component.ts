import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'df-examples',
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
      <a routerLink="cleanup-effect" routerLinkActive="active" mat-flat-button color="warn">Cleanup Effect</a>
      <a routerLink="untracked" routerLinkActive="active" mat-flat-button color="warn">Untracked</a>
      <a routerLink="untracked-scoped" routerLinkActive="active" mat-flat-button color="warn">Untracked Scoped</a>
      <a routerLink="equal" routerLinkActive="active" mat-flat-button color="warn">Equal</a>
    </mat-toolbar>
    <router-outlet />

  `,
  styleUrl: './examples.component.scss'
})
export default class ExamplesComponent {
}
