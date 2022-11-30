import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/validators/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains = appEmailDomains;

  constructor(private activateRoute:ActivatedRoute, private router: Router, private authService: AuthService) {

  }

  loginHandler(form: NgForm): void {
   if(form.invalid) { return }
      this.authService.user = {
      username: 'Jon',
      
   } as any;

   const returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';

   this.router.navigate([returnUrl]);
  }
}
