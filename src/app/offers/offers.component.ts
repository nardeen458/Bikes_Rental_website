import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  offers:any = [];
  userdata:any;
  userid:any;

  constructor(private apiservice:ServicesService){
    this.userdata = localStorage.getItem("userdata")
    this.userdata = JSON.parse(this.userdata)
    this.userid = this.userdata.id
  }

  ngOnInit(){
    console.log(this.userid)
    this.apiservice.get_offers(this.userid)
    .subscribe({next:(data:any)=>{
      this.offers = data;
      console.log(this.offers)
    }})
  }

}
