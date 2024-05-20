import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = "http://localhost:8080/Clothes";
   body = {
    "cimage":"PATH:",
    "cdescription":"Playera Polo Dry Fit",
    "cmaterial":"100% Algodón",
    "ccolor":"Naranja",
    "ctype_clothes":"Playera",
    "csize":"Mediana",
    "fprice":125.00,
    "nstock":15,
    "acategories":["moda2", "fashion2", "playera fit2", "Dark2"]
};

  constructor(private HttpClient: HttpClient) { }

  getProducts(): Observable<any>{
    return this.HttpClient.get(this.API_URL).pipe(res => res);
  }


  


}
