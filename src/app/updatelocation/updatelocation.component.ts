import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrls: ['./updatelocation.component.css']
})
export class UpdatelocationComponent {

  locations:any=[];
  update: FormGroup;
  message = '';
  message2 = '';

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService){
    this.update = this.formBuilder.group({
      id: ['', [Validators.required]],
      location_name: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    this.apiservice.get_locations()
    .subscribe({next:(data:any)=>{
      this.locations = data[0];
    }})
  }

  get f() {
    return this.update.controls;
  }

  submit() {
    //console.log(this.login.value);
    this.message = '';
    this.message2 = '';
  
    //// Call your service method here to submit the form data
    ///// Example:
    this.apiservice.update_location(this.update.value)
    .subscribe({next:(data:any)=>{
      //console.log(data);
      if(data['message']=='Location updated successfully.'){
          this.message="Location updated successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
