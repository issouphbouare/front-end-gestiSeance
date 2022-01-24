import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Apiresponse } from './apiresponse';
import { Professeur } from './professeur';
import { ProfesseurService } from './professeur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedProf:number;
  public role: String;
  public isloggedIn: Boolean = false;

  constructor(private http : HttpClient,private router : Router) { }
  
     
 
 //baseUrl: string = "http://localhost:8080/login/";  

 baseUrl="https://gestiseance.herokuapp.com/login/"; /*connexion au serveur distant*/

 
 getCon(url1 : string):Observable<any>{
   return this.http.get<any>(url1);
 }

 getUser(tel:number):Observable<Professeur>
{
const url = "this.baseUrl"+tel;
return this.http.get<Professeur>(url);
}

signIn(prof :Professeur){
  this.loggedProf = prof.tel;
  this.isloggedIn = true;
  this.role = prof.role;
  localStorage.setItem('loggedProf',this.loggedProf.toString());
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  }

  isAdmin():Boolean{
    let admin: Boolean = false;
    if (!this.role) //this.roles== undefiened
    return false;
    if(this.role == 'Admin') {
    admin = true;
    }
    return admin;
    }
    
    getProfRole(tel :number){
      this.getUser(tel).subscribe((prof: Professeur)=>{
      this.role = prof.role;
      });
      }
 


logout() {
  this.isloggedIn= false;
  this.loggedProf = undefined;
  this.role = undefined;
  localStorage.removeItem('loggedProf');
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  this.router.navigate(['/login']);
}

setLoggedProfFromLocalStorage(tel: number) {
  this.loggedProf = tel;
  this.isloggedIn = true;
  this.getProfRole(tel);
  }
  
  

}
