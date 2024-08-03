import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent {

  addoffer:FormGroup;
  message = '';
  message2 = '';
  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice: ServicesService) {
    this.addoffer = this.formBuilder.group({
      description: ['', [Validators.required]],
    })
  }

  get f() {
    return this.addoffer.controls;
  }

  submit() {
    //// Call your service method here to submit the form data
    this.apiservice.add_offer(this.addoffer.value)
    .subscribe({ next:(data:any)=>{
      if(data['message']=='Offer added successfully.'){
          this.message="Offer added successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
