import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Honoraire } from './honoraire';
import { HonoraireForm } from './honoraire-form';
import { HonoraireComponent } from './honoraire/honoraire.component';
import { TotalHonoraire } from './total-honoraire';

@Injectable({
  providedIn: 'root'
})
export class HonoraireService {

 // baseUrl="http://localhost:8080/honorairePr";
  //baseUrl2="http://localhost:8080/honoraireTotal";

  baseUrl="https://gestiseance.herokuapp.com/honorairePr"; /*connexion au serveur distant*/
  baseUrl2="https://gestiseance.herokuapp.com/honoraireTotal"; /*connexion au serveur distant*/


  constructor(private http: HttpClient) { }

  getAllHonoraire():Observable<Apiresponse>{
      return this.http.get<Apiresponse>(this.baseUrl);
    
  }

  HonoraireTotal():Observable<TotalHonoraire>{
    return this.http.get<TotalHonoraire>(this.baseUrl2);
  
}
  getHonoraireId(id : number):Observable<HonoraireForm>{
    return this.http.get<HonoraireForm>(this.baseUrl+id);
}

getMatiereById(url):Observable<any>{
  return this.http.get<Apiresponse>(url);
}

}
