import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  islogging = true;
  status = "Log in";
  error = null;
  wait = false;
  token: string;
  path: 'null';
  constructor(private api: ApiService
    , private route: ActivatedRoute
    , private router: Router
    , private cartService: CartService
    , private userService: UserService) { }

  ngOnInit(): void {
  }
  register() {
    this.islogging = false;
    this.status = "Register to";
  }
  onSubmit(form: NgForm) {
    this.wait = true;
    const email = form.value.email;
    const password = form.value.password;
    if (this.islogging) {
      this.api.login(email, password).subscribe(res => {
        this.wait = false;
        this.userService.setUser(res.accessToken);
        this.resetUserId();
        if (this.userService.role === 'admin') {
          this.router.navigate(['dashboard']);
        } else {
          this.moveToPreviousPage();
        }
      }, error => {
        this.wait = false;
        this.error = error.error.message;
      })


    } else {
      this.wait = true;
      const username = form.value.username;
      this.api.signUp(username, email, password).subscribe(res => {
        this.wait = false;
        this.userService.setUser(res.accessToken);
        this.resetUserId();
        this.moveToPreviousPage();

      }, error => {
        this.wait = false;
        this.error = error.error.message;
      })

    }
    form.reset();


  }
  moveToPreviousPage() {
    this.route.queryParams.subscribe((params: Params) => {
      this.path = params['last'];
    })
    if (!this.path) {
      this.router.navigate(['/categories']);
    } else {
      this.router.navigate([this.path]);
    }
  }

  resetUserId() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['redirectTo'] === 'shopping-cart') {
        this.api.changeUserId().subscribe(res => {
          this.router.navigate(['/shopping-cart']);
        })
      }
    })
  }

}
