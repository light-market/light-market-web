import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username : string;
  email : string;
  token : string;

  constructor() { }
  setUser(token : string){
    localStorage.setItem('token', token);
    this.token= token;
  }
  removeUser(){
    localStorage.removeItem('token');
    this.token=null;
  }
  checkLogged(){
    this.token=localStorage.getItem('token');
  }
}
