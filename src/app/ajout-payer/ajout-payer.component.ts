import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HonoraireForm } from '../honoraire-form';
import { HonoraireService } from '../honoraire.service';
import { PayerService } from '../payer.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-ajout-payer',
  templateUrl: './ajout-payer.component.html',
  styleUrls: ['./ajout-payer.component.css']
})
export class AjoutPayerComponent implements OnInit {


  public prof: Professeur;
  public honoPr: HonoraireForm;
  private url: string;
  public montant: number = 0;
  public h: number;
  //baseUrl = "http://localhost:8080/professeurs/";
  //baseUrl2 = "http://localhost:8080/honorairePr/";

  baseUrl="https://gestiseance.herokuapp.com/professeurs/"; /*connexion au serveur distant*/
  baseUrl2="https://gestiseance.herokuapp.com/honorairePr/"; /*connexion au serveur distant*/


  constructor(private formBuilder: FormBuilder, private profService: ProfesseurService,
    private apiService: PayerService, private route: ActivatedRoute,
    private router: Router, private honoService: HonoraireService) { }
  formEdit = new FormGroup({});

  ngOnInit() {
    this.formEdit = this.formBuilder.group({
      honoraire: ['', [Validators.required, Validators.min(1)]],
      professeur: ['', Validators.required],
      taux_h: ['', [Validators.required, Validators.min(1000)]],
    });

    this.url = this.route.snapshot.params.id
    this.profService.getProfById(this.baseUrl + this.url).
      subscribe(data => {
        this.prof = data;
        console.log(this.prof);
      }, err => {
        console.log(err);
      }
      );

    this.honoService.getMatiereById(this.baseUrl2 + this.url).
      subscribe(data => {
        this.honoPr = data;
        console.log(this.honoPr);
        this.h = this.honoPr.honoraire;
      }, err => {
        console.log(err);
      });
  }
  onSubmit() {
    console.log(this.h);
    console.log(this.formEdit.value);
    if (this.formEdit.value.honoraire <= this.h) {
      this.apiService.CreatePayer(this.formEdit.value).
        subscribe(data => {
          this.router.navigate(['professeurs']);
        });
      alert("Vous devez "
        + this.formEdit.value.honoraire * this.formEdit.value.taux_h +
        " Fcfa  à Mr/Mme et rendez-vous dans Archives pour imprimer le reçu ");
    } else alert(" Erreur : Vous n'avez que " + this.h + " Heures non payées !");
  }
}
