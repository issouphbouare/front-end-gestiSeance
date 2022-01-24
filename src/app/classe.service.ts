import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Classe } from './classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  //baseUrl="http://localhost:8080/classes";

  baseUrl="https://gestiseance.herokuapp.com/classes"; /*connexion au serveur distant*/


  constructor(private http: HttpClient) { }

  getClasses(p :number, size :number):Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"?sort=nom,asc&page="+p+"&size="+size);
  }

  getAll():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"?sort=nom,asc");
  }

  getClasseById(url):Observable<any>{
    return this.http.get<Apiresponse>(url);
  }
  

  CreateClasse(classe : Classe):Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.baseUrl , classe);
  }

  UpdateClasse(url, classe : Classe):Observable<Apiresponse>{
    return this.http.put<Apiresponse>(url, classe);
  }

  deleteClasse(url){
    return this.http.delete<Apiresponse>(url);
  }

}
