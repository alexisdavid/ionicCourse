import { Component, OnInit } from '@angular/core';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
nombre: string;

 usuario={
   email: "",
   password: ""
 };
  constructor() { }

  ngOnInit() {
  }
  enviarData(){
    console.log(this.usuario);
    
  }

}
