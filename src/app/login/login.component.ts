import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationCancel, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Professeur } from '../professeur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  
  public prof : Professeur;
  public user : Professeur;
  public erreur : number =0;
  //baseUrl: string = "http://localhost:8080/login/"; 

  baseUrl: string="https://gestiseance.herokuapp.com/login/"; /*connexion au serveur distant*/

  constructor(private formBuilder:FormBuilder, 
                private apiResponse : AuthService,             
                    private  router: Router) { }

  ngOnInit(): void {
    
    this.login=this.formBuilder.group({
      tel : ['',Validators.required],
      password : ['',Validators.required]});
  }
login=new FormGroup({});




  onSubmit(){
    console.log(this.login.value);
  const a=this.apiResponse.getCon(this.baseUrl+this.login.value.tel).
  subscribe( data => {
    this.user=data;
     console.log(this.user);
     if (this.user.password==this.login.value.password ) {
  this.apiResponse.signIn(this.user);
  this.router.navigate(['/professeurs']);
  }
  
  },(err) => console.log(err));  this.erreur = 1;
  
}


  
}
