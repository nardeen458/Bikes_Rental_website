import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alllocations',
  templateUrl: './alllocations.component.html',
  styleUrls: ['./alllocations.component.css']
})
export class AlllocationsComponent {

  locations:any=[];
  locations_num:any;

  constructor(private apiservice:ServicesService,private router:Router){}

  ngOnInit(){
    this.apiservice.get_locations()
    .subscribe({next:(data:any)=>{
      this.locations = data[0];
      this.locations_num = data[1];
    }})
  }

  todelete(location: any) {
    if (confirm(`Are you sure you want to delete ${location.location_name}?`)) {
      // Call your delete API here
      this.apiservice.delete_location(location)
       .subscribe(() => {
          window.location.href = "/dashboard/alloffers"; // Redirect to allcategories page
          window.location.reload(); // Reload the page
        });
    }
  }

}
