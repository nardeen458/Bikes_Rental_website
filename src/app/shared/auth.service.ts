import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  roleAs:any;
  userdata:any;

  constructor() { }

  isLogin(){
    return !!localStorage.getItem('userdata')
  }

  getRole() {
    this.userdata = localStorage.getItem("userdata")
    this.userdata = JSON.parse(this.userdata)
    var user_data: any = this.userdata.role;
    //user_data= JSON.parse(user_data)
    this.roleAs=user_data;
    return this.roleAs;
  }


}
