import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service/data-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputValue: any;
  strArray=[]
  constructor(public navCtrl: NavController, public DS: DataServiceProvider) {
    }
  
 


 

}
