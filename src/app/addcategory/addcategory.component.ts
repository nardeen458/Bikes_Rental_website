import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  add_category:FormGroup;
  message = '';
  message2 = '';
  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice: ServicesService) {
    this.add_category = this.formBuilder.group({
      category_name: ['', [Validators.required]],
    })
  }

  get f() {
    return this.add_category.controls;
  }

  submit() {
    //// Call your service method here to submit the form data
    ///// Example:
    this.apiservice.add_category(this.add_category.value)
    .subscribe({ next:(data:any)=>{
      //console.log(data);
      if(data['message']=='Category added successfully'){
          this.message="Category added successfully";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
