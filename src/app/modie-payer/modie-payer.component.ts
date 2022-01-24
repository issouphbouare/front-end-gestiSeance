import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payer } from '../payer';
import { PayerService } from '../payer.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-modie-payer',
  templateUrl: './modie-payer.component.html',
  styleUrls: ['./modie-payer.component.css']
})
export class ModiePayerComponent implements OnInit {

  public payer : Payer;
  public prof : Professeur;
  private url : string;

  constructor(private formBuilder:FormBuilder ,private apiService :PayerService,
    private router:ActivatedRoute, private profService : ProfesseurService,
    private  route:Router) { }
    formEdit = new FormGroup({ });
   
 


 
 ngOnInit(): void {
  this.formEdit=this.formBuilder.group({
    honoraire : ['',[Validators.required, Validators.min(1)]],
      professeur : ['',Validators.required],
      date : ['',Validators.required],
      taux_h :  ['',[Validators.required, Validators.min(1000)]],
    
  });
   this.url=this.router.snapshot.params.id
  this.apiService.getPayerById(this.url).
      subscribe(data=>{
                    this.payer=data;
                    console.log(this.payer);
      }, err=>{
          console.log(err);
         } 
  );
  this.profService.getProfById(this.url+"/professeur").
  subscribe(data=>{
                this.prof=data;
                console.log(this.prof);
  }, err=>{
      console.log(err);
     } 
);


 }
 onSubmit(){
   console.log(this.formEdit.value);
   console.log(this.url);
   this.apiService.updatePayer(this.url, this.formEdit.value).
   subscribe( data => {
     console.log(data);
     alert(" Paiement    modifié avec succes ");
     this.route.navigate(['professeurs']);
     }, err=>{
       console.log(err);
       alert("Cette classe existe deja !");

     });  

 }

}
