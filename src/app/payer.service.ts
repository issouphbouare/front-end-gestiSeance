import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Payer } from './payer';

@Injectable({
  providedIn: 'root'
})
export class PayerService {
  //baseUrl="http://localhost:8080/payers";

  baseUrl="https://gestiseance.herokuapp.com/payers"; /*connexion au serveur distant*/


  constructor(private http: HttpClient) { }

  getPayers(p :number, size :number):Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"?&sort=id,desc&page="+p+"&size="+size);
  }

  getPayerById(url):Observable<any>{
    return this.http.get<Apiresponse>(url);
  }
  

  CreatePayer(payer : Payer):Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.baseUrl , payer);
  }

  updatePayer(url, payer : Payer):Observable<Apiresponse>{
    return this.http.put<Apiresponse>(url, payer);
  }

  deletePayer(url){
    return this.http.delete<Apiresponse>(url);
  }

}
