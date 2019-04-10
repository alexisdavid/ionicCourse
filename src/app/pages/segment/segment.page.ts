import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;

  heroes: Observable<any>;
  textoBusqueda = '';

  constructor(private dataServeice: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';

    this.heroes = this.dataServeice.getSuperHeroes()

  }
  segmentChanged(event) {

    const valorSegment = event.detail.value;
    if (valorSegment === 'todos') {
      this.textoBusqueda = '';
      return;
    }

    this.textoBusqueda = valorSegment;

  }

}
