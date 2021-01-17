import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product.interface';
import { FAQ } from 'src/app/models/faq.interface';
import { Quantities } from 'src/app/models/quantities.interface';
import { environment } from '../../../environments/environment'
import { UserService } from '../user/user.service';
import { Cart } from 'src/app/models/cart.interface';


const api = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient, private userService: UserService) {
  }
  loggedin = false;

  setIPAPi() {
    return this.http.get<any>("http://api.ipify.org/?format=json")
  }

  getCategories() {
    return this.http.get<Category[]>(api + '/categories');
  }

  getProductByCategoy(category: string) {
    return this.http.get<Product[]>(api + '/products/' + category);
  }
  getProductByCategoyAdmin(category: string) {
    const token = this.userService.token;
    return this.http.get<Product[]>(api + '/products/' + category, {
      headers: new HttpHeaders({ adminToken: token })
    });
  }
  getFaq(offset: number = 0, limit: number = 30) {
    return this.http.get<FAQ[]>(api + '/faq');
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
      return this.http.get<Cart>(api + '/cart', {
        headers: new HttpHeaders({ 'accessToken': token })
      })
    } else {
      console.log(this.userService.ip)
      return this.http.get<Cart>(api + '/cart', {
        headers: new HttpHeaders({ 'ip': this.userService.ip })
      })
    }
  }
  setOrderDelieveryDate(date: Date, id: string) {
    const token = this.userService.token;
    return this.http.put<any>(api + '/cart/deliveryDate', { date: date, id: id }, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  changeUserId() {
    const token = this.userService.token;
    if (token) {
      return this.http.put<Cart>(api + '/cart/editId', { ip: this.userService.ip }, {
        headers: new HttpHeaders({ 'accessToken': token })
      })
    }
  }
  order(cart: Cart) {
    const token = this.userService.token;
    console.log(token)
    if (token) {
      return this.http.put<{ message: string }>(api + '/cart', { cart }, {
        headers: new HttpHeaders({ 'accessToken': token })
      })
    }
  }
  editCategory(category: Category) {
    const token = this.userService.token;
    return this.http.put<{ message: string }>(api + '/categories', { category }, {
      headers: new HttpHeaders({ 'adminToken': token })
    })

  }
  addCategory(category: Category) {
    const token = this.userService.token;
    return this.http.post<{ message: string }>(api + '/categories', category, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  deleteCategory(id: string) {
    const token = this.userService.token;
    return this.http.delete<{ message: string }>(api + '/categories/' + id, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }

  setDelivered(id: string) {
    const token = this.userService.token;
    return this.http.put<{ message: string }>(api + '/orderDelivered/' + id, {}, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  deleteCart(id: string) {
    const token = this.userService.token;
    return this.http.delete<any>(api + '/cart/' + id, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  addProductToCart(product: Product) {
    if (this.userService.token) {
      return this.http.post<any>(api + '/cart', product, {
        headers: new HttpHeaders({ 'accessToken': this.userService.token })
      })
    } else {
      console.log(this.userService.ip)
      return this.http.post<any>(api + '/cart', {
        product: product,
        userId: this.userService.ip
      })
    }


  }
  UpdateAmount(cartID: string, productID: string, productPrice: string, type: string) {
    return this.http.post<Cart>(api + '/cart-update', {
      cartID: cartID,
      productID: productID,
      productPrice: productPrice,
      type: type
    })
  }
  addProduct(product: Product, type: string) {
    const token = this.userService.token;
    return this.http.post<any>(api + '/products/' + type, product, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  updateProduct(product: Product) {
    const token = this.userService.token;
    return this.http.put<any>(api + '/products/' + product.id, product, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  deleteProduct(id: string) {
    const token = this.userService.token;
    return this.http.delete<any>(api + '/products/' + id, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  getQuestionsAdmin() {
    const token = this.userService.token;
    return this.http.get<FAQ[]>(api + '/faq/', {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  DeleteQuestion(id: string) {
    const token = this.userService.token;
    return this.http.delete<any>(api + '/faq/' + id, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  approveQuestion(faq: FAQ) {
    const token = this.userService.token;
    return this.http.put<any>(api + '/faq/' + faq.id, faq, {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  getOrders() {
    const token = this.userService.token;
    return this.http.get<Cart[]>(api + '/cart-admin', {
      headers: new HttpHeaders({ 'adminToken': token })
    })
  }
  getUserOrder() {
    const token = this.userService.token;
    return this.http.get<Cart[]>(api + '/userOrders', {
      headers: new HttpHeaders({ 'accessToken': token })
    })

  }

}
