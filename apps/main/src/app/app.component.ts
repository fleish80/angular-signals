import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: 'df-root',
  template: `
  <nav class="nav">
    <a routerLink="/signals-store">Signals Store</a>
    <a routerLink="/glitch-free">Glitch Free</a>
    <a routerLink="/basic">Basic</a>
    <a routerLink="/object-basic">Object Basic</a>  
  </nav>
<router-outlet></router-outlet>`,
styles: [`
  .nav {
    display: flex;
    gap: 10px;
  }
`],
})
export class AppComponent {
  
}
