import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { RentComponent } from './rent/rent.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OffersComponent } from './offers/offers.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { DeletebikeComponent } from './deletebike/deletebike.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { UpdatebikeComponent } from './updatebike/updatebike.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllrentsComponent } from './allrents/allrents.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AllbikesComponent } from './allbikes/allbikes.component';
import { AlloffersComponent } from './alloffers/alloffers.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { UpdateofferComponent } from './updateoffer/updateoffer.component';
import { AlllocationsComponent } from './alllocations/alllocations.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikesComponent,
    RentComponent,
    BikeDetailsComponent,
    SignupComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    OffersComponent,
    ReceiptComponent,
    DashboardComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
 
    DeletebikeComponent,
    AddbikeComponent,
    UpdatebikeComponent,
    AllusersComponent,
    AllrentsComponent,
    AllcategoriesComponent,
    DashboardHomeComponent,
    AllbikesComponent,
    AlloffersComponent,
    AddofferComponent,
 
    UpdateofferComponent,
    AlllocationsComponent,
    AddlocationComponent,
    UpdatelocationComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // Define your routes here
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
