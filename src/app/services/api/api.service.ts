import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Category } from 'src/app/models/category.interface';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product.interface';
import { FAQ } from 'src/app/models/faq.interface';
import {tap} from 'rxjs/operators'
import { Quantities } from 'src/app/models/quantities.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http : HttpClient) {
  }
  loggedin=false;

  getCategories() {
    return this.http.get<Category[]>('http://localhost:3000/api/categories');
  }

  getProductByCategoy(category: string, offset: number = 0, limit: number = 30) {
    let urlParams = new HttpParams ();
    urlParams = urlParams.append('offset',offset.toString());
    urlParams = urlParams.append('limit',limit.toString());
    return this.http.get<Product[]>('http://localhost:3000/api/products/'+category,{params : urlParams});
  }
  getFaq (offset :number = 0,limit :number =30){
    let urlParams = new HttpParams ();
    urlParams = urlParams.append('offset',offset.toString());
    urlParams = urlParams.append('limit',limit.toString());
    return this.http.get<FAQ[]>('http://localhost:3000/api/faq/users',{params : urlParams});
  }
  sendQuestion(faq:FAQ){
    return this.http.post<{message:string}>('http://localhost:3000/api/faq',faq);
  }

  signUp(username : string, email:string , password : string){
    return this.http.post<{accessToken:string}>('http://localhost:3000/api/register',{
      username : username,
      email : email,
      password : password
    }).pipe(tap(response =>{
      const token = response.accessToken;
      localStorage.setItem('token',token);
      this.loggedin=true;
    }));
  }

  login(email : string, password : string){
    return this.http.post<{accessToken:string}>('http://localhost:3000/api/login',{
      email : email,
      password : password
    }).pipe(tap(response=>{
      const token = response.accessToken;
      localStorage.setItem('token',token);
      this.loggedin=true;
    }))
  }
  apiSaveToCart(orderQuantities : Quantities[],totalPrice:number){
    const token = localStorage.getItem('token')
    return this.http.post<{message:string}>('http://localhost:3000/api/cart',{
      products : orderQuantities,
      totalPrice : totalPrice
    },{
      headers : new HttpHeaders({'accessToken':token})
    })
  }
  getCart(){
    const token = localStorage.getItem('token');
    if (token){
      return this.http.get<{cart:Product[],quantities:Quantities[],totalPrice:number}>('http://localhost:3000/api/cart',{
        headers: new HttpHeaders({'accessToken':token})
      })
    }
  }
}
