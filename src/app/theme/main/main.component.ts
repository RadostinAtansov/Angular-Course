import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements DoCheck {

isLoggedIn = false;

  constructor(private authSevice: AuthService) {
  }
  
  ngDoCheck(): void {
    this.isLoggedIn = this.authSevice.isLoggedIn;
  }

}
