import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Professeur } from './professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  //baseUrl="http://localhost:8080/professeurs";

  baseUrl="https://gestiseance.herokuapp.com/professeurs"; /*connexion au serveur distant*/


  constructor(private http: HttpClient) { }

  getProf(p :number, size :number):Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"?sort=nom,asc&page="+p+"&size="+size);
  }

  getAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl);
  }

  getProfById(url):Observable<any>{
    return this.http.get<Apiresponse>(url);
  }
  

  CreateProf(prof : Professeur):Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.baseUrl , prof);
  }

  UpdateProf(url, prof : Professeur):Observable<Apiresponse>{
    return this.http.put<Apiresponse>(url, prof);
  }

  getSeanceProfById(url):Observable<any>{
    return this.http.get<Apiresponse>(url);
  }

  getArchiveProfById(url):Observable<any>{
    return this.http.get<Apiresponse>(url);
  }

  deleteProf(url){
    return this.http.delete<Apiresponse>(url);
  }


}
