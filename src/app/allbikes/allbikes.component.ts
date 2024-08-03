import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-allbikes',
  templateUrl: './allbikes.component.html',
  styleUrls: ['./allbikes.component.css']
})
export class AllbikesComponent {

  bikes:any=[];
  bikes_num:any;

  constructor(private apiservice:ServicesService){}

  ngOnInit(){
    this.apiservice.all_bikes()
    .subscribe({next:(data:any)=>{
      for(let item of data[0]){
        item.image="http://localhost/example-app/public/storage/"+item.image
      }
      this.bikes = data[0];
      this.bikes_num = data[1];
      // console.log(this.bikes)
      console.log(this.bikes[0].image);
    }})
  }

}
