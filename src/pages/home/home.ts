import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service/data-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public itemsToDisplay;

  inputValue:string;

  constructor(public navCtrl: NavController, public DS: DataServiceProvider) {
    this.getItems()
    }
  
    
    setItem(inputValue){
     
      console.log(inputValue );
      if(inputValue){
      this.DS.setVal(inputValue)
      console.log(inputValue + ' is set in storage')
      inputValue=null  
      }else{
        console.log('null values are not acceptable')
      }
      this.inputValue = null
      
    }


    getItems(){
      let storageItems = null
     storageItems = this.DS.getVal();
     if(storageItems){
     console.log("vals from storage", storageItems);
    }else{
      console.log('from else')
      console.log(this.DS.getVal())
    }
    }

 

}
