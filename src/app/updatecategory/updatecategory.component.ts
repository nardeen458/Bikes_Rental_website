import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent {

  categories:any=[];
  update: FormGroup;
  message = '';
  message2 = '';

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService){
    this.update = this.formBuilder.group({
      id: ['', [Validators.required]],
      category_name: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    this.apiservice.get_categories()
    .subscribe({next:(data:any)=>{
      this.categories = data[0];
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
    this.apiservice.update_category(this.update.value)
    .subscribe({next:(data:any)=>{
      //console.log(data);
      if(data['message']=='Category updated successfully'){
          this.message="Category updated successfully";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
