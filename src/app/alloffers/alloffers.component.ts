import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alloffers',
  templateUrl: './alloffers.component.html',
  styleUrls: ['./alloffers.component.css']
})
export class AlloffersComponent {

  offers:any=[];
  offers_num:any;

  constructor(private apiservice:ServicesService,private router:Router){}

  ngOnInit(){
    this.apiservice.all_offers()
    .subscribe({next:(data:any)=>{
      this.offers = data[0];
      this.offers_num = data[1];
    }})
  }

  todelete(offer: any) {
    if (confirm(`Are you sure you want to delete ${offer.offer_name}?`)) {
      // Call your delete API here
      this.apiservice.delete_offer(offer)
       .subscribe(() => {
          window.location.href = "/dashboard/alloffers"; // Redirect to allcategories page
          window.location.reload(); // Reload the page
        });
    }
  }
}
