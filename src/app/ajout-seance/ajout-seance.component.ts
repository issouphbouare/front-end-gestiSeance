import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from '../classe.service';
import { Matiere } from '../matiere';
import { MatiereService } from '../matiere.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-ajout-seance',
  templateUrl: './ajout-seance.component.html',
  styleUrls: ['./ajout-seance.component.css']
})
export class AjoutSeanceComponent implements OnInit {
  public seance: Seance;
  public prof : Professeur;
  public classes;
  public matieres;
  private url : string;

  constructor(private formBuilder:FormBuilder, private profService: ProfesseurService,
    private clService: ClasseService, private mService: MatiereService,
    private apiService: SeanceService, private route:ActivatedRoute,
    private  router:Router) { }
  formAdd = new FormGroup({ });

  ngOnInit() {
    this.formAdd=this.formBuilder.group({
      horaire : ['',Validators.required],
      type : ['',Validators.required],
      duree : ['',Validators.required],
      professeur : ['',Validators.required],
      classe : ['',Validators.required],
      matiere : ['',Validators.required],
      titre : ['',Validators.required],
      contenu : ['',Validators.required],
    });

    this.url=this.route.snapshot.params.id
    this.profService.getProfById(this.url).
        subscribe(data=>{
                      this.prof=data;
                      console.log(this.prof);
        }, err=>{
            console.log(err);
           } 
    );

    this.clService.getAll().subscribe(data=>{
      this.classes=data;
      console.log(this.classes);
       }, err=>{
               console.log(err);
               });

               this.mService.getAll().subscribe(data=>{
                this.matieres=data;
                console.log(this.matieres);
                 }, err=>{
                         console.log(err);
                         });
  }
onSubmit(){
  console.log(this.formAdd.value);
  this.apiService.CreateSeance(this.formAdd.value).
  subscribe( data => {
    this.router.navigate(['professeurs']);
   });
    alert("Seance de Mr/Mme  ajoutee avec succes ! ");  
}



}
