import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  categoriesURL = "http://localhost/example-app/public/api/categories";
  bikesURL = "http://localhost/example-app/public/api/bikes";
  adduserURL='http://localhost/example-app/public/api/addUser';
    bikeURL = "http://localhost/example-app/public/api/bike/";
  offersURL = "http://localhost/example-app/public/api/offers/";
  categorybikeURL = "http://localhost/example-app/public/api/categoryBikes/";
  durationsURL = "http://localhost/example-app/public/api/durations";
  locationsURL = "http://localhost/example-app/public/api/locations";
  homebikesURL = "http://localhost/example-app/public/api/homeBikes";
  loginURL = "http://localhost/example-app/public/api/login";
  userURL = "http://localhost/example-app/public/api/user/";
  rentURL = "http://localhost/example-app/public/api/rent";
  receiptURL = "http://localhost/example-app/public/api/receipt";
  creditURL = "http://localhost/example-app/public/api/credit/";
  messageURL = "http://localhost/example-app/public/api/message/";
  getbikesURL = "http://localhost/example-app/public/api/getbikes";
  usersURL = "http://localhost/example-app/public/api/users";
  rentalsURL = "http://localhost/example-app/public/api/rentals";
  limitedbikesURL = "http://localhost/example-app/public/api/limitedbikes";
  limitedrentalsURL = "http://localhost/example-app/public/api/limitedrentals";
  alloffersURL = "http://localhost/example-app/public/api/alloffers";
  addcategoryURL = "http://localhost/example-app/public/api/addcategory";
  updatecategoryURL = "http://localhost/example-app/public/api/updatecategory";
  updatebikeURL = "http://localhost/example-app/public/api/updatebike";
  addbikeURL = "http://localhost/example-app/public/api/addbike";
  deletecategoryURL = "http://localhost/example-app/public/api/deletecategory";
  deletebikeURL = "http://localhost/example-app/public/api/deletebike";
  addlocationURL = "http://localhost/example-app/public/api/addlocation";
  updatelocationURL = "http://localhost/example-app/public/api/updatelocation";
  deletelocationURL = "http://localhost/example-app/public/api/deletelocation";
  addofferURL = "http://localhost/example-app/public/api/addoffer";
  updateofferURL = "http://localhost/example-app/public/api/updateoffer";
  deleteofferURL = "http://localhost/example-app/public/api/deleteoffer";
  updatebikenameURL = "http://localhost/example-app/public/api/updatebikename";
  updatebikedesURL = "http://localhost/example-app/public/api/updatebikedescription";
  updatebikecategoryURL = "http://localhost/example-app/public/api/updatebikecategory";
  updatebikeageURL = "http://localhost/example-app/public/api/updatebikeage";
  discountURL = "http://localhost/example-app/public/api/discount/";

  constructor(private http:HttpClient) {}

  get_categories(){
    return this.http.get<[]>(this.categoriesURL);
  }
  get_bikes(){
    return this.http.get<[]>(this.bikesURL);  
  }
  get_home_bikes(){
    return this.http.get<[]>(this.homebikesURL);  
  }
  get_offers(cond:any){
    return this.http.get<[]>(this.offersURL+cond);  
  }
  discount(cond:any){
    return this.http.get<[]>(this.discountURL+cond);  
  }
  get_bike(cond:any){
    return this.http.get<[]>(this.bikeURL+cond);  
  }
  get_category_bikes(cond:any){
    return this.http.get<[]>(this.categorybikeURL+cond);  
  }
  get_durations(){
    return this.http.get<[]>(this.durationsURL);
  }
  get_locations(){
    return this.http.get<[]>(this.locationsURL);
  }
  insert_user(user:any){
    return this.http.post<[]>(this.adduserURL,user);
  }
  login(user:any){
    return this.http.post<[]>(this.loginURL,user);  
  }
  get_user(cond:any){
    return this.http.get<[]>(this.userURL+cond);  
  }
  rent(data:any){
    return this.http.post<[]>(this.rentURL,data);  
  }
  receipt(){
    return this.http.get<[]>(this.receiptURL);  
  }
  credit(data:any,cond:any){
    return this.http.post<[]>(this.creditURL+cond,data);  
  }
  message(data:any,cond:any){
    return this.http.post<[]>(this.messageURL+cond,data);  
  }
  all_bikes(){
    return this.http.get<[]>(this.getbikesURL);  
  }
  all_users(){
    return this.http.get<[]>(this.usersURL);  
  }
  all_rentals(){
    return this.http.get<[]>(this.rentalsURL);  
  }
  limited_bikes(){
    return this.http.get<[]>(this.limitedbikesURL);  
  }
  limited_rentals(){
    return this.http.get<[]>(this.limitedrentalsURL);  
  }
  all_offers(){
    return this.http.get<[]>(this.alloffersURL);  
  }
  add_category(data:any){
    return this.http.post<[]>(this.addcategoryURL,data);  
  }
  update_category(data:any){
    return this.http.post<[]>(this.updatecategoryURL,data);  
  }
  delete_category(data:any){
    return this.http.post<[]>(this.deletecategoryURL,data);  
  }
  delete_bike(data:any){
    return this.http.post<[]>(this.deletebikeURL,data);  
  }
  add_location(data:any){
    return this.http.post<[]>(this.addlocationURL,data);  
  }
  update_location(data:any){
    return this.http.post<[]>(this.updatelocationURL,data);  
  }
  delete_location(data:any){
    return this.http.post<[]>(this.deletelocationURL,data);  
  }
  add_offer(data:any){
    return this.http.post<[]>(this.addofferURL,data);  
  }
  update_offer(data:any){
    return this.http.post<[]>(this.updateofferURL,data);  
  }
  delete_offer(data:any){
    return this.http.post<[]>(this.deleteofferURL,data);  
  }
  update_bike_name(data:any){
    return this.http.post<[]>(this.updatebikenameURL,data);  
  }
  update_bike_description(data:any){
    return this.http.post<[]>(this.updatebikedesURL,data);  
  }
  update_bike_category(data:any){
    return this.http.post<[]>(this.updatebikecategoryURL,data);  
  }
  update_bike_age(data:any){
    return this.http.post<[]>(this.updatebikeageURL,data);  
  }
  update_bike(data:any){
    return this.http.post<any>(this.updatebikeURL,data)
  }
  add_bike(data:any){
    return this.http.post<any>(this.addbikeURL,data)
  }
}

