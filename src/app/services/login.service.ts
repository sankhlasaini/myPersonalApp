import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  login(userForm) {
    console.log(userForm.value)
    return this._http.post('/login', userForm.value).map((res: Response) => {
      return res.json();
    })
  }

}
