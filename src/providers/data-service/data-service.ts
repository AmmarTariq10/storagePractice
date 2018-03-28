import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


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
 
 async getVal(){
  let storageItems = []
  this.storage.get('data')
  .then((val)=>{
    storageItems = val
    console.log('storage items from provider',storageItems)
    
  }).catch((e)=>{
    console.log(e)
  })
  return await storageItems
 }
 

}
