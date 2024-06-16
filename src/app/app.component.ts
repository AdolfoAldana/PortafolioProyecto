import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { App2Component } from './app2/app2.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private router: Router) { }

  redirigir() {
    this.router.navigate(['/App2Component']);
  }
  title = 'PortafolioProyecto';
  
}
