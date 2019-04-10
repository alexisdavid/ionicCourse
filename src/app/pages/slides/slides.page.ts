import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  ocultar = "";
  slideOpts = {
    effect: 'flip'
  };
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/iconos/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/iconos/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/iconos/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/iconos/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];
  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }
  onClick() {
    this.ocultar = "animated fadeOut fast"
    this.navctrl.navigateBack("/");

  }

}
