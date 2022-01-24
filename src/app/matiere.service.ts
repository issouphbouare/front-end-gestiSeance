import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Matiere } from './matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  //baseUrl="http://localhost:8080/matieres";
  
  baseUrl="https://gestiseance.herokuapp.com/matieres"; /*connexion au serveur distant*/


  constructor(private http: HttpClient) { }

  getMatieres(p :number, size :number):Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"?sort=nom,asc&page="+p+"&size="+size);
  }

  getAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"?sort=nom,asc");
  }

  getMatiereById(url):Observable<any>{
    return this.http.get<Apiresponse>(url);
  }
  

  CreateMatiere(matiere : Matiere):Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.baseUrl , matiere);
  }

  UpdateMatiere(url, matiere : Matiere):Observable<Apiresponse>{
    return this.http.put<Apiresponse>(url, matiere);
  }

  deleteMatiere(url){
    return this.http.delete<Apiresponse>(url);
  }

}
