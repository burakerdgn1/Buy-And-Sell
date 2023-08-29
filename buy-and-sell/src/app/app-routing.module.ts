import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/listings',pathMatch:'full'},
  {path:'listings',component:ListingsPageComponent,pathMatch:'full'},//using pathmatch full, to avoid misrouting that may navigates us to listings, even if the exact path is not listings(e.g: it is .../listings/1)
  {path:'listings/:id',component:ListingDetailPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'edit-listing/:id',component:EditListingPageComponent},
  {path:'my-listings',component:MyListingsPageComponent},
  {path:'new-listing',component:NewListingPageComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
