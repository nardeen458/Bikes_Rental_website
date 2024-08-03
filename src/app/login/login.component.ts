// import { ServiceService } from './../service/service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email=''
  password=''
  login: FormGroup;
  message = '';
  message2 = '';
  userID:any;
  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice: ServicesService) {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  
  get f() {
    return this.login.controls;
  }




  submit() {
    //console.log(this.login.value);
    this.message = '';
    this.message2 = '';
  
    //// Call your service method here to submit the form data
    ///// Example:
    this.apiservice.login(this.login.value)
    .subscribe({ next:(data:any)=>{
      //console.log(data);
      if(data['message']=='loged in successfully'){
          this.message="loged in successfully";
          this.userID = data["user_id"]
          this.apiservice.get_user(this.userID)
          .subscribe({ next:(data:any)=>{
            localStorage.setItem("userdata",JSON.stringify(data));
            this.router.navigate(['/home']);
          }})
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}

