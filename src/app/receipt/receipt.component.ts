import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {

  receipt:any=[];
  bike:any=[];
  duration:any=[];
  location:any=[];
  user:any=[];

  constructor(private apiservice:ServicesService){}

  ngOnInit(): void {
    this.apiservice.receipt()
    .subscribe({ next:(data:any)=>{
      console.log(data)
      this.receipt[0] = data[0]
      this.bike[0] = data[1]
      this.duration[0] = data[2]
      this.location[0] = data[3]
      this.user[0] = data[4]
    }})
  }

  printPage(){
    document.getElementsByClassName("print")
    window.print();
}

}
