import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HonoraireForm } from '../honoraire-form';
import { HonoraireService } from '../honoraire.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-honoraire-pr',
  templateUrl: './honoraire-pr.component.html',
  styleUrls: ['./honoraire-pr.component.css']
})
export class HonorairePrComponent implements OnInit {

  public honoPr : HonoraireForm;
  private urbl : String;
  private prof: Professeur;
  private url: number;
  //baseUrl="http://localhost:8080/honorairePr";

  baseUrl="https://gestiseance.herokuapp.com/honorairePr"; /*connexion au serveur distant*/

  
  constructor(private apiService: HonoraireService, private profService: ProfesseurService,
    private router:ActivatedRoute, public authService : AuthService,
    private  route:Router) { }
   

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.url=this.router.snapshot.params.id
    
    this.apiService.getMatiereById(this.baseUrl+"/"+ this.url).
        subscribe(data=>{
                      this.honoPr=data;
                      console.log(this.honoPr);
        }, err=>{
            console.log(err);
           } 
    );
  }



}
