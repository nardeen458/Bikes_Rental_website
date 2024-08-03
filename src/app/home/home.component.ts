import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bikes:any=[]

  constructor(private apiservice:ServicesService){}

  ngOnInit(){
    this.apiservice.get_home_bikes()
    .subscribe({next:(data:any)=>{
      for(let item of data){
        item.image="http://localhost/example-app/public/storage/"+item.image
      }
      this.bikes = data;
    }})
  }

}
