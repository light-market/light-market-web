import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product.interface';
import { FAQ } from 'src/app/models/faq.interface';
import { tap } from 'rxjs/operators'
import { Quantities } from 'src/app/models/quantities.interface';
import { environment } from '../../../environments/environment'
import { UserService } from '../user/user.service';


const api = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient,private userService : UserService) {
  }
  loggedin = false;

  getCategories() {
    return this.http.get<Category[]>(api + '/categories');
  }

  getProductByCategoy(category: string, offset: number = 0, limit: number = 30) {
    let urlParams = new HttpParams();
    urlParams = urlParams.append('offset', offset.toString());
    urlParams = urlParams.append('limit', limit.toString());
    return this.http.get<Product[]>(api + '/products/' + category, { params: urlParams });
  }
  getFaq(offset: number = 0, limit: number = 30) {
    let urlParams = new HttpParams();
    urlParams = urlParams.append('offset', offset.toString());
    urlParams = urlParams.append('limit', limit.toString());
    return this.http.get<FAQ[]>(api + '/faq/users', { params: urlParams });
  }
  sendQuestion(faq: FAQ) {
    return this.http.post<{ message: string }>(api + '/faq', faq);
  }

  signUp(username: string, email: string, password: string) {
    return this.http.post<{ accessToken: string }>(api + '/register', {
      username: username,
      email: email,
      password: password
    });
  }

  login(email: string, password: string) {
    return this.http.post<{ accessToken: string }>(api + '/login', {
      email: email,
      password: password
    })
  }
  apiSaveToCart(orderQuantities: Quantities[], totalPrice: number) {
    const token = this.userService.token;
    return this.http.post<{ message: string }>(api + '/cart', {
      products: orderQuantities,
      totalPrice: totalPrice
    }, {
      headers: new HttpHeaders({ 'accessToken': token })
    })
  }
  getCart() {
    const token = this.userService.token;
    if (token) {
      return this.http.get<{ cart: Product[], quantities: Quantities[], totalPrice: number }>(api + '/cart', {
        headers: new HttpHeaders({ 'accessToken': token })
      })
    }
  }

}
