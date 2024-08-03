import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deletebike',
  templateUrl: './deletebike.component.html',
  styleUrls: ['./deletebike.component.css']
})
export class DeletebikeComponent {

  delete:FormGroup;
  message = '';
  message2 = '';
  bikes:any=[];

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService){ 
    this.delete = this.formBuilder.group({
      id: ['', [Validators.required]],
    })
  }

  ngOnInit(){
    this.apiservice.get_bikes()
    .subscribe({next:(data:any)=>{
      this.bikes = data;
    }})
  }

  get f() {
    return this.delete.controls;
  }

  submit(){
    this.apiservice.delete_bike(this.delete.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Bike deleted successfully.'){
        this.message="Bike deleted successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
