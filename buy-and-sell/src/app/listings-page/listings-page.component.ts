import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/list-item';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  ngOnInit(): void {
    this.listings=fakeListings;
  }
  listings:Listing[]=[];



}