import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor() { }
  data = [
    {
      name: 'primary',
      state: true
    },
    {
      name: 'secondary',
      state: false
    },
    {
      name: 'danger',
      state: false
    },
    {
      name: 'light',
      state: false
    },
    {
      name: 'dark',
      state: false
    },
    {
      name: 'medium',
      state: false
    },
    {
      name: 'tertiary',
      state: false
    },
    {
      name: 'success',
      state: false
    }
  ]

  ngOnInit() {
  }
  onClick(i) {
    console.log(i);

  }
}
