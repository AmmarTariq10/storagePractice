import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  storageArray = []
  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello DataServiceProvider Provider');
  }


setVal(item){

  let items = []
  this.storageArray.push(item)
  items = this.storageArray
  this.storage.set('data',items)

 }
 
 getVal(){
  let storageItems = []
  this.storage.get('data')
  .then((val)=>{
    storageItems = val
    console.log(val)
  })
  return storageItems
 }
 

}
