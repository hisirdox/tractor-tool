import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from 'src/shared/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  form!: FormGroup
  verify: any

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Login())
  }

  createForm(login: Login) {
    this.form = this.formBuilder.group({
      login: ['admin'],
      password: ['admin'],
      type: ['matriz']
    })
  }

  login() {
    this.verify = this.form.value
    if (this.verify.login == "admin" && this.verify.password == "admin") {
      if (this.verify.type == "matriz") {
        this.router.navigate(['/tratores']);
      }
      if (this.verify.type == "proprietario") {
        this.router.navigate(['/proprietario']);
      }
    }
  }
}
