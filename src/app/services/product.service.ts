import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  API_URL: string = "http://localhost:8080/Clothes";
  

  constructor(private HttpClient: HttpClient) { }

  getProducts(): Observable<any>{
    return this.HttpClient.get(this.API_URL).pipe(res => res);
  }

  CrearProducto(formData:any):Observable<any>{

    console.log(formData)
    return this.HttpClient.post<ProductInterface>(this.API_URL, formData);
  }

  update(id: number, formData: any){
    this.HttpClient.put<ProductInterface>(`http://localhost:8080/Clothes/${id}`,formData);
  }

  delete(id: number){
    return this.HttpClient.delete<ProductInterface>(`http://localhost:8080/Clothes/${id}`);
  }
  


}
