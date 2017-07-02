import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
  animations: [
    trigger('bgImgTrigger', [
      transition('void => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateY(-50px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ])
  ]
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

  checkDB() {
    this.LoginService.checkDB()
      .subscribe(checkDB => {
        console.log('this is check DB ->>', checkDB);
      });
  }

  login() {
    this.LoginService.login(this.loginForm)
      .subscribe(loginResponse => {
        console.log('this is in comp ->>', loginResponse);
      });
  }
}
