import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  openConfirmDialog(){
    console.log("confirmation");
  }
}
