import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  users_num:any;
  rentals_num:any;
  bikes_num:any;
  bikes:any = [];
  rentals:any = [];

  constructor(private apiservice:ServicesService){}

  ngOnInit(){
    this.apiservice.all_rentals()
    .subscribe({next:(data:any)=>{
      this.rentals_num = data[1];
    }})

    this.apiservice.all_users()
    .subscribe({next:(data:any)=>{
      this.users_num = data[1];
    }})

    this.apiservice.all_bikes()
    .subscribe({next:(data:any)=>{
      this.bikes_num = data[1];
    }})

    this.apiservice.limited_bikes()
    .subscribe({next:(data:any)=>{
      for(let item of data){
        item.image="http://localhost/example-app/public/storage/"+item.image
      }
      this.bikes = data;
    }})

    this.apiservice.limited_rentals()
    .subscribe({next:(data:any)=>{
      for(let item of data){
        item.image="http://localhost/example-app/public/storage/"+item.image
      }
      this.rentals = data;
    }})
  }

}
