import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../models/list-item';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email:string='';
  message:string='';
  listing:Listing|undefined;

  constructor(private route:ActivatedRoute,private router:Router,private listingsService:ListingsService){}
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id as string).subscribe(listing=>{
      this.listing=listing,
      this.message=`Hi, I'm interested in your ${listing?.name.toLowerCase()}`;
    })

  }

  sendMessage(){
    alert("Your message has been sent!");
    this.router.navigateByUrl('listings');
  }

}
