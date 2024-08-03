import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { RentComponent } from './rent/rent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OffersComponent } from './offers/offers.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllusersComponent } from './allusers/allusers.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { DeletebikeComponent } from './deletebike/deletebike.component';
import { UpdatebikeComponent } from './updatebike/updatebike.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { AllrentsComponent } from './allrents/allrents.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AllbikesComponent } from './allbikes/allbikes.component';
import { AlloffersComponent } from './alloffers/alloffers.component';
import { AlllocationsComponent } from './alllocations/alllocations.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { UpdateofferComponent } from './updateoffer/updateoffer.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  { path: "home", component: HomeComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "bikes", component: BikesComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "details/:id", component: BikeDetailsComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "rent", component: RentComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "aboutus", component: AboutusComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "signup", component: SignupComponent},
  { path: "login", component: LoginComponent},
  { path: "contactus", component: ContactusComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "offers", component: OffersComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "receipt", component: ReceiptComponent ,canActivate:[AuthGuard],data:{role:["user"]}},
  { path: "dashboard", component: DashboardComponent,canActivate:[AuthGuard],data:{role:["admin"]}, children: [
    { path: "", redirectTo: "homepage", pathMatch: "full" }, // Redirect /dashboard to /dashboard/homepage
    { path: "homepage", component: DashboardHomeComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "allusers", component: AllusersComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "updatecategory", component: UpdatecategoryComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "addcategory", component: AddcategoryComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "deletebike", component: DeletebikeComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "updatebike", component: UpdatebikeComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "addbike", component: AddbikeComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "allrents", component: AllrentsComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "allcategories", component: AllcategoriesComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "allbikes", component: AllbikesComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "alloffers", component: AlloffersComponent,canActivate:[AuthGuard],data:{role:["admin"]} },
    { path: "alllocations", component: AlllocationsComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "addoffer", component: AddofferComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "addlocation", component: AddlocationComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "updateoffer", component: UpdateofferComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
    { path: "updatelocation", component: UpdatelocationComponent ,canActivate:[AuthGuard],data:{role:["admin"]}},
  ] },
 
  { path: "**", redirectTo: "/login", pathMatch:"full"} // Redirect invalid routes to /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
