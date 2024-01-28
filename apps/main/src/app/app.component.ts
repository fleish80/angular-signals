import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  selector: 'df-root',
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/examples" routerLinkActive="active" mat-flat-button color="primary">Examples</a>
      <a routerLink="/glitch" routerLinkActive="active" mat-flat-button color="primary">Glitch Free</a>
      <a routerLink="/glitch-free-advanced" routerLinkActive="active" mat-flat-button color="primary">Signals make Angular MUCH easier</a>
      <a routerLink="/state-management" routerLinkActive="active" mat-flat-button color="primary">State Management</a>
    </mat-toolbar>
    <router-outlet />
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
