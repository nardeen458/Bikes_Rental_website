import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  message: FormGroup;
  userdata: any;
  msg:any;

  constructor(private formBuilder: FormBuilder,private apiservice:ServicesService){

    this.userdata = localStorage.getItem("userdata")
    this.userdata = JSON.parse(this.userdata)

    this.message = this.formBuilder.group({
      username: [this.userdata.username, [Validators.required]],
      email: [this.userdata.email, [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })

  }

  submit(){
    this.apiservice.message(this.message.value, this.userdata.id)
    .subscribe({ next:(data:any)=>{
      if(data['message']=='Message sent successfully'){
        this.msg="Message sent successfully";
      }
    }})
  }
}
