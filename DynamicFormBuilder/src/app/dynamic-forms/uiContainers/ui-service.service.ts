import { Injectable } from '@angular/core';

@Injectable()
export class UiServiceService {

   value : number = 1;

  constructor() {
   }

  get questionCount(){
    return this.value++;
  }

}
