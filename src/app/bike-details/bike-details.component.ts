import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent {

  bike:any=[]
  bikeId: any;
  durations:any=[]
  locations:any=[]
  userdata:any;
  discount:any=[]
  rents:any;

  constructor(private route: ActivatedRoute,private apiservice:ServicesService){
    this.userdata = localStorage.getItem("userdata")
    this.userdata = JSON.parse(this.userdata)
  }
  
  ngOnInit(): void {
    this.bikeId = this.route.snapshot.paramMap.get('id');
    //console.log(this.bikeId)
    this.apiservice.get_bike(this.bikeId)
    .subscribe({ next:(data:any)=>{
      data.image="http://localhost/example-app/public/storage/"+data.image
      this.bike=data
    }})
    this.apiservice.get_durations()
    .subscribe({ next:(data:any)=>{
      //console.log(data)
      this.durations = data
    }})
    this.apiservice.get_locations()
    .subscribe({ next:(data:any)=>{
      this.locations = data[0]
    }})
    this.apiservice.discount(this.userdata.id)
    .subscribe({ next:(data:any)=>{
      console.log(data)
      this.discount = data[0]
      this.rents = data[1]
    }})
  }
}
