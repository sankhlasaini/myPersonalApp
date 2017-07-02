import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class ProfileService {

  constructor(private _http: Http) { }

  createAccount(profileData) {
    return this._http.post('/userCredential', profileData).map((res: Response) => {
      return res.json();
    });
  }

  checkEmail(email) {
    return this._http.get('/userCredential', { search: { email: email } }).map((res: Response) => {
      return res.json();
    });
  }
}
