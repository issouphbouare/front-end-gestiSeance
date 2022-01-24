import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  //public url: string= "http://localhost:8080/login/";
  //public url1: string="http://localhost:8080/professeurs/";

  public url: string="https://gestiseance.herokuapp.com/login/"; /*connexion au serveur distant*/
  public url1: string="https://gestiseance.herokuapp.com/professeurs/"; /*connexion au serveur distant*/


  public url2 : string;
  public id : number;
  public prof : Professeur;
  public mode : number=0;


  constructor(private formBuilder:FormBuilder,
    private apiService: ProfesseurService, private authService : AuthService,
    private  router:Router ,private route: ActivatedRoute) { }
  formEdit = new FormGroup({ });

  ngOnInit() {
    console.log(this.authService.loggedProf);
    this.id=this.authService.loggedProf;
    this.authService.getCon(this.url+this.id).
  subscribe( data => {
    this.prof=data;
     //console.log(this.prof);
  },err=>{console.log(err);});
  console.log(this.prof);

  this.formEdit=this.formBuilder.group({
    tel : ['',[Validators.required, Validators.maxLength(10)]],
    nom : ['',[Validators.required, Validators.pattern("([A-Z]){3,}")]],
    prenom : ['',[Validators.required, Validators.pattern("([A-Z]).{2,}")]],
    password : ['',[Validators.required]],
      role : ['',[Validators.required]]
  });
  }
  onSubmit(){
    console.log(this.formEdit.value);
    console.log(this.url1+this.prof.id);
    this.url2=this.url1+this.prof.id;

    console.log(this.url);
    this.apiService.UpdateProf(this.url2, this.formEdit.value).
    subscribe( data => {
      console.log(data);
      alert(" Profil modifiée avec succes !");
      this.authService.logout();
      }, err=>{
        console.log(err);
        alert("Il  existe deja un Professeur avec le meme numero de telephone "+this.formEdit.value.tel);
 
      });  
 
  }

  ChangeR(){
    this.mode=1;
  }

  }


