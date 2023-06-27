import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.css']
})
export class ProprietarioComponent {
  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/']);
  }
}
