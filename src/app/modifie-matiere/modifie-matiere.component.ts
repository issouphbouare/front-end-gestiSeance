import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from '../matiere';
import { MatiereService } from '../matiere.service';

@Component({
  selector: 'app-modifie-matiere',
  templateUrl: './modifie-matiere.component.html',
  styleUrls: ['./modifie-matiere.component.css']
})
export class ModifieMatiereComponent implements OnInit {

  public matiere : Matiere;
  private url : string;

  constructor(private formBuilder:FormBuilder ,private apiService: MatiereService,
    private router:ActivatedRoute,
    private  route: Router) { }
    formEdit = new FormGroup({ });
   
 


 
 ngOnInit(): void {
  this.formEdit=this.formBuilder.group({
    nom : ['',[Validators.required, Validators.pattern("([A-Z]).{2,}")]],
  });
   this.url=this.router.snapshot.params.id
  this.apiService.getMatiereById(this.url).
      subscribe(data=>{
                    this.matiere=data;
                    console.log(this.matiere);
      }, err=>{
          console.log(err);
         } 
  );


 }
 onSubmit(){
   console.log(this.formEdit.value);
   console.log(this.url);
   this.apiService.UpdateMatiere(this.url, this.formEdit.value).
   subscribe( data => {
     console.log(data);
     alert(" Matiere  "+this.formEdit.value.nom+"  modifiee avec succes ");
     this.route.navigate(['matieres']);
     }, err=>{
       console.log(err);
       alert("Cette matiere existe deja !");
     });  

 }

}
