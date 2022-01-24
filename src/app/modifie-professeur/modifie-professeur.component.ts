import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-modifie-professeur',
  templateUrl: './modifie-professeur.component.html',
  styleUrls: ['./modifie-professeur.component.css']
})
export class ModifieProfesseurComponent implements OnInit {

  public prof : Professeur;
  private url : string;

  constructor(private formBuilder:FormBuilder ,private apiService: ProfesseurService,
    private router:ActivatedRoute,
    private dialog:DialogService,
    private  route:Router) { }
    formEdit = new FormGroup({ });
   
 


 
 ngOnInit(): void {
  this.formEdit=this.formBuilder.group({
    tel : ['',[Validators.required, Validators.maxLength(10), Validators]],
    nom : ['',[Validators.required, Validators.pattern("([A-Z]){3,}")]],
    prenom : ['',[Validators.required, Validators.pattern("([A-Z]).{2,}")]],
  });
   this.url=this.router.snapshot.params.id
  this.apiService.getProfById(this.url).
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
   this.apiService.UpdateProf(this.url, this.formEdit.value).
   subscribe( data => {
     console.log(data);
     alert(" Compte de Mr  "+this.formEdit.value.nom+"  modifiee avec succes ");
     this.route.navigate(['professeurs']);
     }, err=>{
       console.log(err);
       alert("Il  existe deja un Professeur avec le meme numero de telephone "+this.formEdit.value.tel);

     });  

 }

}
