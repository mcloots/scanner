import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  public randomNum = Math.floor(Math.random() * 6) + 1;

  constructor(private router: Router) { }

  back() {
    //Navigate to home pagina
    this.router.navigate(['']);
  }
}
