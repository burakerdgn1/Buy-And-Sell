import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../models/list-item';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  listing:Listing|undefined;
  isLoading:boolean=true;
  constructor(private route:ActivatedRoute,private router:Router,private listingService:ListingsService){

  }
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.listingService.getListingById(id as string).subscribe(listing=>{
      this.listing=listing;
      this.isLoading=false;

    });
    this.listingService.addViewToListing(id as string).subscribe(
      ()=>console.log('Views Updated!'))
    

  }


}
