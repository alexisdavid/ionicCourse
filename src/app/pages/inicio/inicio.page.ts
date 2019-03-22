import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'botones y router',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'date-time',
      redirectTo: '/date-time'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
