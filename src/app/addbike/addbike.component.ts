import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent {

  addbike:FormGroup;
  message = '';
  message2 = '';
  categories:any=[];
  file:any;

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService,private sanitizer: DomSanitizer){ 
    this.addbike = this.formBuilder.group({
      bike_name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      suitable_age: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    this.apiservice.get_categories()
    .subscribe({next:(data:any)=>{
      this.categories = data[0];
    }})
  }

  get f() {
    return this.addbike.controls;
  }

  public onFileChange(event:any){
    this.file = event.target.files[0];
  }

  submit(){
    const formData1 = new FormData();
    formData1.append('bike_name',this.addbike.controls['bike_name'].value);
    formData1.append('description',this.addbike.controls['description'].value);
    formData1.append('category_id',this.addbike.controls['category_id'].value);
    formData1.append('suitable_age',this.addbike.controls['suitable_age'].value);
    formData1.append('image',this.file);

    this.apiservice.add_bike(formData1)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Bike added successfully.'){
        this.message="Bike added successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
