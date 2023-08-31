import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/list-item';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  ngOnInit(): void {
    this.listings=fakeListings;
  }
  listings:Listing[]=[];
  onDeleteClicked(listingId:string){
    alert(`Deleting the listing with id: ${listingId}`);

  }

}
