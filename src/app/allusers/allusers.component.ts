import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  users:any=[];
  user_num:any;

  constructor(private apiservice:ServicesService){}

  ngOnInit(){
    this.apiservice.all_users()
    .subscribe({next:(data:any)=>{
      this.users = data[0];
      this.user_num = data[1]
      //console.log(this.bikes)
    }})
  }

}
