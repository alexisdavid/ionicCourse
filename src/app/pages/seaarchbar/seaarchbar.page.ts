import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-seaarchbar',
  templateUrl: './seaarchbar.page.html',
  styleUrls: ['./seaarchbar.page.scss'],
})
export class SeaarchbarPage implements OnInit {
  albums: any[] = [];
  textoBusqueda = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(data => {
      console.log(data);

      this.albums = data;

    })
  }

  buscar(event) {

    // console.log(event);

    this.textoBusqueda = event.detail.value;
  }
}
