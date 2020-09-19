import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, of } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  islogging = true;
  status = "Log in";
  error = null;
  token : string;
  path : 'null';
  constructor(private api: ApiService , private route: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
  }
  register() {
    this.islogging = false;
    this.status = "Register to";
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    if (this.islogging) {
      this.api.login(email, password).subscribe(data => {
        this.moveToPreviousPage();
      }, error => {
        this.error= error.error.message;
      })
      
    } else {
      const username = form.value.username;
      //console.log(form.value);
      this.api.signUp(username, email, password).subscribe(data => {
        this.moveToPreviousPage();
      }, error => {
        this.error=error.error.message;
      })
    }
    form.reset();
    

  }
  moveToPreviousPage(){
    this.route.queryParams.subscribe((params:Params)=>{
      this.path = params['last'];
    })
    if(!this.path){
      this.router.navigate(['/categories']);
    }
    this.router.navigate([this.path]);
  }

}
