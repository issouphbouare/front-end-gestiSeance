import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Seance } from './seance';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  //baseUrl="http://localhost:8080/seances";

  baseUrl="https://gestiseance.herokuapp.com/seances"; /*connexion au serveur distant*/


  constructor(private http: HttpClient) { }

  getSeances(p :number, size :number):Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"?&sort=id,desc&page="+p+"&size="+size);
  }

  getSeanceById(url):Observable<any>{
    return this.http.get<Apiresponse>(url);
  }
  

  CreateSeance(seance : Seance):Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.baseUrl , seance);
  }

  updateSeance(url, seance : Seance):Observable<Apiresponse>{
    return this.http.put<Apiresponse>(url, seance);
  }

  deleteSeance(url){
    return this.http.delete<Apiresponse>(url);
  }

}
