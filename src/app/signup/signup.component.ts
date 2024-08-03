import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: FormGroup;
  message = '';
  message2 = '';
  userID:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiservice: ServicesService) {
    this.signup = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, this.ageValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }
  
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      if (password!== confirmPassword) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
  
  ageValidator(control: FormGroup): { [key: string]: boolean } | null {
    if (control.value < 16) {
      return { 'age': true };
    }
    return null;
  }

  get f() {
    return this.signup.controls;
  }


ngOnInit():void{}

  submit() {
    console.log(this.signup.value);
    this.message = '';
    this.message2 = '';
  
    //// Call your service method here to submit the form data
    ///// Example:
    this.apiservice.insert_user(this.signup.value)
    .subscribe({ next:(data:any)=>{
      if(data['message']=='User added successfully'){
        this.message="User added successfully";
        this.userID = data["user_id"]
          this.apiservice.get_user(this.userID)
          .subscribe({ next:(data:any)=>{
            localStorage.setItem("userdata",JSON.stringify(data));
            this.router.navigate(['/home']); // Assuming '/home' is the route to your home page
          }})
      }
      else{
        this.message2 = data['message'];
      }
    }})
  
  
  
    // Navigate to the home page after form submission
  }
    
}
