import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/list-item';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  constructor(private listingsService:ListingsService){}
  ngOnInit(): void {
   this.listingsService.getListingsForUser().subscribe(listings=>this.listings=listings);
  }
  listings:Listing[]=[];
  onDeleteClicked(listingId:string){
    this.listingsService.deleteListing(listingId).subscribe(()=>{
      this.listings=this.listings.filter(
        listing=>listing.id!==listingId
      )
    })

  }

}
