import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../models/list-item';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit{
  listing:Listing|any;
  constructor(private router:Router,private route:ActivatedRoute,private listingsService:ListingsService){

  }
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id as string).subscribe(listing=>this.listing=listing);
  }
  onSubmit({name,description,price}:any){
    this.listingsService.editListing(this.listing.id,name,description,price).subscribe(
      ()=>{
        this.router.navigateByUrl('/my-listings');
      }
    );
    
  }
  

}
