import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from '../classe.service';
import { MatiereService } from '../matiere.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-add-seance',
  templateUrl: './add-seance.component.html',
  styleUrls: ['./add-seance.component.css']
})
export class AddSeanceComponent implements OnInit {

  public seance: Seance;
  public profs;
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
    this.profService.getAll().
        subscribe(data=>{
                      this.profs=data;
                      console.log(this.profs);
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
