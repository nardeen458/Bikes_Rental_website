import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent{

  bikes:any=[]
  durations:any=[]
  locations:any=[]
  msg:any;
  msg0:any;
  rent: FormGroup;
  credit: FormGroup;
  userdata:any;

  constructor(private router: Router,private formBuilder: FormBuilder,private apiservice:ServicesService,private renderer: Renderer2, private elementRef: ElementRef){
    this.userdata = localStorage.getItem("userdata");
    this.userdata = JSON.parse(this.userdata);

    this.rent = this.formBuilder.group({
      username: [this.userdata.username, [Validators.required]],
      phone_number: ['', [Validators.required]],
      email: [this.userdata.email, [Validators.required, Validators.email]],
      pickup_datetime: ['', [Validators.required]],
      location_id: ['', [Validators.required]],
      bike_id: ['', [Validators.required]],
      duration_id: ['', [Validators.required]],
      payment_method: ['', [Validators.required]]
    })
    
    this.credit = this.formBuilder.group({
      credit_number: ['', [Validators.required]],
      credit_password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.apiservice.get_bikes()
    .subscribe({ next:(data:any)=>{
      this.bikes = data
    }})
    this.apiservice.get_durations()
    .subscribe({ next:(data:any)=>{
      this.durations = data
    }})
    this.apiservice.get_locations()
    .subscribe({ next:(data:any)=>{
      this.locations = data[0]
    }})
  }

  submit(){
    this.apiservice.rent(this.rent.value)
    .subscribe({ next:(data:any)=>{
      if(data['message']=='You rented successfully'){
        this.msg="You rented successfully";
        this.router.navigate(["/receipt"]);
      }
    }})
  }

  value(event:any){
    if(event.target.value == "credit card"){
      const creditSection = this.elementRef.nativeElement.querySelector('.credit');
      this.renderer.setStyle(creditSection, 'display', 'flex');
    }
  }

  submit0(){
    this.apiservice.credit(this.credit.value,this.userdata.id)
    .subscribe({ next:(data:any)=>{
      if(data['message']=='credit added successfully'){
        this.msg0="credit added successfully";
        const creditSection = this.elementRef.nativeElement.querySelector('.credit');
        this.renderer.setStyle(creditSection, 'display', 'none');
      }
    }})
  }
}
