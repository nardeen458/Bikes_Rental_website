import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-allrents',
  templateUrl: './allrents.component.html',
  styleUrls: ['./allrents.component.css']
})
export class AllrentsComponent {

  rentals:any=[];
  rentals_num:any;

  constructor(private apiservice:ServicesService){}

  ngOnInit(){
    this.apiservice.all_rentals()
    .subscribe({next:(data:any)=>{
      for(let item of data[0]){
        item.image="http://localhost:8080/bikes_rental_laravel/public/storage/"+item.image
      }
      this.rentals = data[0];
      this.rentals_num = data[1];
    }})
  }

}
