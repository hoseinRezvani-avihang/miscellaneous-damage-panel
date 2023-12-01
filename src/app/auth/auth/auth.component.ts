import { Component, OnInit } from '@angular/core';
import { HttpAuthService } from '../services/http-auth.service';
import { EMPTY, catchError, concatMap, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  $token = this.authService.token;
  loginText = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {};

  ngOnInit(): void {
    this.loginText = 'در حال برقراری ارتباط ...';
    this.authService.initialize().pipe(
      catchError((err) => {
        this.loginText = "ارتباط برقرار نشد."
        throw(err);
      }),
      concatMap(() => {
        this.loginText = "در حال احراز هویت ..."
        return this.authService.login().pipe(
          catchError((err) => {
            this.loginText = "احراز هویت با موفقیت انجام نشد."
            throw(err);
          })
        );
      })
    ).subscribe(() => {
      this.authService.isAuth.next(true);
      this.router.navigate(["dossier"], {queryParams: {token: this.$token.getValue()}})
    });
  }
}
