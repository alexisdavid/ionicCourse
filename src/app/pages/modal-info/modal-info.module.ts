import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPage } from './modal-info.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule { }

// para evitar que se habara el modulo del modal info hay que borrar las rutas y todas referencias:
// const routes: Routes = [
//   {
//     path: '',
//     component: ModalInfoPage
//   }
// ];
