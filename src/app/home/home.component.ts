import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  allowedFormats = [BarcodeFormat.QR_CODE];

  scanSuccessHandler($event: unknown) {
    //Navigate to pay pagina
    this.router.navigate(['pay']);
  }
}
