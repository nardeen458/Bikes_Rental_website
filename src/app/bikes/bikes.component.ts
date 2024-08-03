import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
  categories:any=[];
  bikes:any=[];

  constructor(private router:Router,private apiservice:ServicesService){}

  ngOnInit(){
    this.apiservice.get_categories()
    .subscribe({next:(data:any)=>{
      this.categories = data[0];
      //console.log(this.categories)
    }})

    this.apiservice.get_bikes()
    .subscribe({next:(data:any)=>{
      for(let item of data){
        item.image="http://localhost/example-app/public/storage/"+item.image
      }
      this.bikes = data;
      //console.log(this.bikes)
    }})
  }

  get_category_bikes(event:any){
    if(event.target.value == ""){
      this.apiservice.get_bikes()
      .subscribe({next:(data:any)=>{
        for(let item of data){
          item.image="http://localhost/example-app/public/storage/"+item.image
        }
        this.bikes = data;
      }})
    }
    else{
      this.apiservice.get_category_bikes(event.target.value)
      .subscribe({ next:(data:any)=>{
        for(let item of data){
        item.image="http://localhost/example-app/public/storage/"+item.image
        }
        this.bikes=data
      }})
    }
  }

  // todetails(){
  //   this.router.navigate(["/details"]);
  // }
}
