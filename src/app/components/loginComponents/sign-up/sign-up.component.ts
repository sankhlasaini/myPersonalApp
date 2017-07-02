import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ProfileService } from "app/services/profile.service";
import { MdSnackBar } from "@angular/material";
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [ProfileService],
  animations: [
    trigger('bgImgTrigger', [
      transition('* => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateY(-50px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class SignUpComponent implements OnInit {

  gender = [
    { view: 'Male', value: 'm' },
    { view: 'Female', value: 'f' }
  ];

  userExist = false;

  public signUpForm: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private router: Router,
    private ProfileService: ProfileService, public snackBar: MdSnackBar) {

    this.signUpForm = fb.group({
      name: '',
      email: '',
      password: '',
      gender: '',
      dob: ''
    });
  }

  ngOnInit() { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  signUp() {
    this.ProfileService.createAccount(this.signUpForm.value).subscribe(res => {
      console.log('this is for sign up -->>', res);
      if (res.msg.success) {
        this.openSnackBar('Successfully Registered', 'PLEASE LOGIN')
      }
    })
  }

  checkEmail(email) {
    this.userExist = false;
    if (email) {
      this.ProfileService.checkEmail(email).subscribe(res => {
        if (res.data.length > 0) {
          this.userExist = true;
        }
      })
    }
  }

}