import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent {
  
  constructor(private router:Router,private listingService:ListingsService){}

  onSubmit({name,description,price}:any){
    this.listingService.createListing(name,description,price).subscribe(
      ()=>{
        this.router.navigateByUrl('/my-listings');
      }
    )

  }
}
