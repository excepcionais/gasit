import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalData {

  constructor(public storage: Storage) {

  }

  getData(datab: string) {
    return this.storage.get(datab);
  }

  saveData(datab: string, data){
    this.storage.set(datab, data);
  }

}
