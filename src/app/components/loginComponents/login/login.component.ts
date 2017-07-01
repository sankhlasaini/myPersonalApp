import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private router: Router,
    private LoginService: LoginService) {

    this.loginForm = fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() { }

  login() {
    this.LoginService.login(this.loginForm)
      .subscribe(loginResponse => {
        console.log('this is in comp ->>', loginResponse);
      });
  }
}
