import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikes_rental';
  userdata:any;
  username="";

  constructor(private router:Router){
    this.userdata = localStorage.getItem("userdata")
    this.userdata = JSON.parse(this.userdata)
    if(!!localStorage.getItem('userdata')){
      this.username = this.userdata.username
    }
  }

  logout(){
    localStorage.removeItem("userdata");
  }

  isLogin(){
    return this.router.url=="/login" || this.router.url=="/signup" || this.router.url=="/receipt" || this.router.url=="/dashboard"
    || this.router.url=="/dashboard/allusers" || this.router.url=="/dashboard/updatecategory" || this.router.url=="/dashboard/addcategory"
    || this.router.url=="/dashboard/deletecategory" || this.router.url=="/dashboard/deletebike" || this.router.url=="/dashboard/updatebike"
    || this.router.url=="/dashboard/addbike" || this.router.url=="/dashboard/allrents" || this.router.url=="/dashboard/allcategories"
    || this.router.url=="/dashboard/allbikes" || this.router.url=="/dashboard/homepage" || this.router.url=="/dashboard/alloffers" 
    || this.router.url=="/dashboard/alllocations" || this.router.url=="/dashboard/addoffer" || this.router.url=="/dashboard/addlocation"
    || this.router.url=="/dashboard/updateoffer" || this.router.url=="/dashboard/updatelocation" || this.router.url=="/dashboard/deleteoffer"
    || this.router.url=="/dashboard/deletelocation";
  }

}
