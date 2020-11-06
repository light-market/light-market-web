import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username : string;
  email : string;
  token : string;
  role : string;

  constructor() { }
  setUser(token : string){
    localStorage.setItem('token', token);
    this.token=token;
    this.decodeToken(token);
    
  }
  removeUser(){
    localStorage.removeItem('token');
    this.token=null;
  }
  checkLogged(){
    this.token=localStorage.getItem('token');
    this.decodeToken(this.token)

  }
  decodeToken(token:string){
    const decoded =jwt_decode(token);
    this.username=decoded.username;
    this.email =decoded.email;
    this.role=decoded.role;
  }
}
