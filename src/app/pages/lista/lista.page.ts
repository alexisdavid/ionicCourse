import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  @ViewChild('lista') lista: IonList

  usuarios: Observable<any>;
  constructor(private dataService: DataService,
    private toastController: ToastController) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers()


  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      // message: 'Your settings have been saved.'
      message,
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  favorite(user) {
    // console.log('favorite', user);
    this.presentToast('favorite');
    this.lista.closeSlidingItems();


  }
  share(user) {
    // console.log('share', user);
    this.presentToast('share');
    this.lista.closeSlidingItems();


  }
  unread(user) {
    // console.log('unread', user);
    this.presentToastWithOptions();
    this.lista.closeSlidingItems();

  }

}
