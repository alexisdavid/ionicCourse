import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


  dob: Date = new Date();
  constructor() { }

  ngOnInit() {
  }
  cambioFecha(event) {
    console.log('ionChange', event);
    console.log('Date prueba', new Date(event.detail.value));

  }
}
