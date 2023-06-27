import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratores',
  templateUrl: './tratores.component.html',
  styleUrls: ['./tratores.component.css']
})
export class TratoresComponent {
  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/']);
  }
}
