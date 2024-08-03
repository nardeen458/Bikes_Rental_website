import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateoffer',
  templateUrl: './updateoffer.component.html',
  styleUrls: ['./updateoffer.component.css']
})
export class UpdateofferComponent {

  offers:any=[];
  update: FormGroup;
  message = '';
  message2 = '';

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService){
    this.update = this.formBuilder.group({
      id: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    this.apiservice.all_offers()
    .subscribe({next:(data:any)=>{
      this.offers = data[0];
    }})
  }

  get f() {
    return this.update.controls;
  }

  submit() {
    this.message = '';
    this.message2 = '';
  
    //// Call your service method here to submit the form data
    this.apiservice.update_offer(this.update.value)
    .subscribe({next:(data:any)=>{
      //console.log(data);
      if(data['message']=='Offer updated successfully.'){
          this.message="Offer updated successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
