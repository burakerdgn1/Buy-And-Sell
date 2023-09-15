import { Injectable } from '@angular/core';
import { Listing } from './models/list-item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  listings:Listing[]=[];

  constructor(private http:HttpClient) { }

  getListings():Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id:string):Observable<Listing>{
    return this.http.get<Listing>(`/api/listings/${id}`);

  }
  addViewToListing(id:string):Observable<Listing>{
    return this.http.post<Listing>(
      `
      /api/listings/${id}/add-view
      `,
      {},
      httpOptions
    );

  }
}
