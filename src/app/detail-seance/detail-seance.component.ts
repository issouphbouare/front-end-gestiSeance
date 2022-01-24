import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../classe';
import { ClasseService } from '../classe.service';
import { DialogService } from '../dialog.service';
import { Matiere } from '../matiere';
import { MatiereService } from '../matiere.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-detail-seance',
  templateUrl: './detail-seance.component.html',
  styleUrls: ['./detail-seance.component.css']
})
export class DetailSeanceComponent implements OnInit {

  public seance: Seance;
  public prof: Professeur;
  public matiere: Matiere;
  public classe: Classe;
  private url: string;
  public mode: number = 0;
  public profs;
  public classes;
  public matieres;

  constructor(private formBuilder: FormBuilder, private apiService: SeanceService,
    private router: ActivatedRoute, private classeServive: ClasseService, private matiereService: MatiereService,
    private professeurService: ProfesseurService,
    private route: Router) { }
  formEdit = new FormGroup({});





  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
      date: ['', Validators.required],
      horaire: ['', Validators.required],
      type: ['', Validators.required],
      duree: ['', Validators.required],
      professeur: ['', Validators.required],
      classe: ['', Validators.required],
      matiere: ['', Validators.required],
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
    });
    this.url = this.router.snapshot.params.id
    this.apiService.getSeanceById(this.url).
      subscribe(data => {
        this.seance = data;
        console.log(this.seance);
      }, err => {
        console.log(err);
      });
    this.classeServive.getClasseById(this.url + "/classe").
      subscribe(data => {
        this.classe = data;
        console.log(this.classe);
      }, err => {
        console.log(err);
      });
    this.matiereService.getMatiereById(this.url + "/matiere").
      subscribe(data => {
        this.matiere = data;
        console.log(this.matiere);
      }, err => {
        console.log(err);
      });
    this.professeurService.getProfById(this.url + "/professeur").
      subscribe(data => {
        this.prof = data;
        console.log(this.prof);
      }, err => {
        console.log(err);
      });

    this.professeurService.getAll().
      subscribe(data => {
        this.profs = data;
        console.log(this.profs);
      }, err => {
        console.log(err);
      }
      );

    this.classeServive.getAll().subscribe(data => {
      this.classes = data;
      console.log(this.classes);
    }, err => {
      console.log(err);
    });

    this.matiereService.getAll().subscribe(data => {
      this.matieres = data;
      console.log(this.matieres);
    }, err => {
      console.log(err);
    });



  }
  onSubmit() {
    console.log(this.formEdit.value);
    console.log(this.url);
    this.apiService.updateSeance(this.url, this.formEdit.value).
      subscribe(data => {
        console.log(data);
        alert(" Seance    modifiee avec succes ");
        this.route.navigate(['professeurs']);
      }, err => {
        console.log(err);

      });

  }
  onEdit() { this.mode = 1; }


}
