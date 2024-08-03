import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-updatebike',
  templateUrl: './updatebike.component.html',
  styleUrls: ['./updatebike.component.css']
})
export class UpdatebikeComponent {
  selectedField: string = '';
  showUpdateForm: boolean = true;
  showDescriptionForm: boolean = false;
  showBikeNameForm: boolean = false;
  showCategoryIdForm: boolean = false;
  showSuitableAgeForm: boolean = false;
  showImageForm: boolean = false;
  update: FormGroup;
  update_name: FormGroup;
  update_description: FormGroup;
  update_category: FormGroup;
  update_age: FormGroup;
  message = '';
  message2 = '';
  bikes:any=[];
  categories:any=[];
  file:any;
  msg = '';
  msg1 = '';
  message0 = '';
  message1 = '';
  message3 = '';
  message4 = '';
  message5 = '';
  message6 = '';

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService,private sanitizer: DomSanitizer){ 
    this.update = this.formBuilder.group({
      id: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })

    this.update_name = this.formBuilder.group({
      id: ['', [Validators.required]],
      bike_name: ['', [Validators.required]]
    })

    this.update_description = this.formBuilder.group({
      id: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })

    this.update_category = this.formBuilder.group({
      id: ['', [Validators.required]],
      category_id: ['', [Validators.required]]
    })

    this.update_age = this.formBuilder.group({
      id: ['', [Validators.required]],
      suitable_age: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    this.apiservice.get_bikes()
    .subscribe({next:(data:any)=>{
      this.bikes = data;
    }})

    this.apiservice.get_categories()
    .subscribe({next:(data:any)=>{
      this.categories = data[0];
    }})
  }

  get f() {
    return this.update.controls;
  }
  get f1() {
    return this.update_name.controls;
  }
  get f2() {
    return this.update_description.controls;
  }
  get f3() {
    return this.update_category.controls;
  }
  get f4() {
    return this.update_age.controls;
  }

  public onFileChange(event:any){
    this.file = event.target.files[0];
  }

  submit_name(){
    this.apiservice.update_bike_name(this.update_name.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Bike name updated successfully.'){
        this.message="Bike name updated successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

  submit_description(){
    this.apiservice.update_bike_description(this.update_description.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Bike description updated successfully.'){
        this.msg="Bike description updated successfully.";
      }
      else{
        this.msg1=data['message'];
      }
    }})
  }

  submit_category(){
    this.apiservice.update_bike_category(this.update_category.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Bike category updated successfully.'){
        this.message0="Bike category updated successfully.";
      }
      else{
        this.message1=data['message'];
      }
    }})
  }

  submit_age(){
    this.apiservice.update_bike_age(this.update_age.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Bike suitable age updated successfully.'){
        this.message3="Bike suitable age updated successfully.";
      }
      else{
        this.message4=data['message'];
      }
    }})
  }

  submit(){
    const formData1 = new FormData();
    formData1.append('id',this.update.controls['id'].value);
    formData1.append('image',this.file);

    this.apiservice.update_bike(formData1)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Bike updated successfully'){
        this.message5="Bike updated successfully";
      }
      else{
        this.message6=data['message'];
      }
    }})
  }

  onSelectChange() {
    this.showUpdateForm = false;
    switch (this.selectedField) {
      case 'description':
        this.showDescriptionForm = true;
        break;
      case 'bike_name':
        this.showBikeNameForm = true;
        break;
      case 'category_id':
        this.showCategoryIdForm = true;
        break;
      case 'suitable_age':
        this.showSuitableAgeForm = true;
        break;
      case 'image':
        this.showImageForm = true;
        break;
    }
  }

  onSubmitDescription() {
    // Implement your description form submission logic here
    console.log('Description form submitted');
  }

  onSubmitBikeName() {
    // Implement your bike name form submission logic here
    console.log('Bike name form submitted');
  }

  onSubmitCategoryId() {
    // Implement your category ID form submission logic here
    console.log('Category ID form submitted');
  }

  onSubmitSuitableAge() {
    // Implement your suitable age form submission logic here
    console.log('Suitable age form submitted');
  }

  onSubmitImage() {
    // Implement your image form submission logic here
    console.log('Image form submitted');
  }
}
