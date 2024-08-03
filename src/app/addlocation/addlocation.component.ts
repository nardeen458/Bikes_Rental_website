import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent {

  addlocation:FormGroup;
  message = '';
  message2 = '';
  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice: ServicesService) {
    this.addlocation = this.formBuilder.group({
      location_name: ['', [Validators.required]],
    })
  }

  get f() {
    return this.addlocation.controls;
  }

  submit() {
    //// Call your service method here to submit the form data
    this.apiservice.add_location(this.addlocation.value)
    .subscribe({ next:(data:any)=>{
      if(data['message']=='Location added successfully.'){
          this.message="Location added successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
