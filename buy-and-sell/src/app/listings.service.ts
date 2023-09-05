import { Injectable } from '@angular/core';
import { fakeListings } from './fake-data';
import { Listing } from './models/list-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  listings:Listing[]=[];

  constructor(private http:HttpClient) { }

  getListings():Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listings');
  }
}
