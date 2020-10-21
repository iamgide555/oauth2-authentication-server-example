import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLogin() {
    // document.cookie.match()
    console.log("islogin")
  }
}
