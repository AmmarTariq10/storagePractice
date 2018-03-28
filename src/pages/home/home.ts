import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service/data-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController, public DS: DataServiceProvider) {
    }
  
    
    setItem(inputValue){
      if(inputValue){
      this.DS.setVal(inputValue)
      console.log(inputValue + ' is set in storage')
      inputValue=null  
      }else{
        console.log('null values are not acceptable')
      }
    }


    getItems(){
     let storageItems = this.DS.getVal();
     console.log(storageItems)
    }

 

}
