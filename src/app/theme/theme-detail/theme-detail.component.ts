import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.css']
})
export class ThemeDetailComponent {

  constructor(private activateRoute: ActivatedRoute) {
    console.log(this.activateRoute.snapshot.data?.['theme']);
   }
}
