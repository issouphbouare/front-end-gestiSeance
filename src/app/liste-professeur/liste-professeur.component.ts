import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesseurService } from '../professeur.service';
import { Professeur } from '../professeur';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-liste-professeur',
  templateUrl: './liste-professeur.component.html',
  styleUrls: ['./liste-professeur.component.css']
})
export class ListeProfesseurComponent implements OnInit {

  public profs;
  public User : Professeur;
  public currentPage: number=0;
  public size : number=5;
  public nbPage : number;
  public pages : Array<number>;
  //public url: string= "http://localhost:8080/login/";

  public url: string="https://gestiseance.herokuapp.com/login/"; /*connexion au serveur distant*/




  constructor(private http: HttpClient, public authService : AuthService,
    private apiService: ProfesseurService,
    private router : Router) { }

  ngOnInit(): void {
    this.onGetAllProf();
    console.log(this.authService.loggedProf); 
    this.authService.getCon(this.url+this.authService.loggedProf).
    subscribe(data=>{
                 this.User=data;
                 console.log(this.User);
    },err=>{console.log(err)});

  }

  onGetAllProf(){
    this.apiService.getProf(this.currentPage, this.size)
    .subscribe(data=>{
    this.nbPage=data["page"].totalPages;
    this.pages=new Array<number>(this.nbPage);
    this.profs=data;

  }, err=>{
    console.log(err);
  })

  }

  goToPage(i){
    this.currentPage=i;
    this.onGetAllProf();
  }

  onDelete(p){
    if(confirm("Voulez-vous vraiment supprimer le compte du Professeur  "+p.nom+ " ?")){
      console.log(p);
      this.apiService.deleteProf(p._links.self.href)
      .subscribe( data=>{
        this.onGetAllProf();
    
        }, err=>{
          console.log(err);
        }
      );

    alert("Compte de Mr "+p.nom+  " supprimé avec succes");
  }
    
  }

  

}
