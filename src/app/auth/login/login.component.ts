import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private activateRoute:ActivatedRoute, private router: Router, private authService: AuthService) {

  }

  loginHandler(): void {
        this.authService.user = {
      username: 'Jon',
      
   } as any;

   const returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';

   this.router.navigate([returnUrl]);
  }
}
