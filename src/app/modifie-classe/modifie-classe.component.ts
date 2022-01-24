import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../classe';
import { ClasseService } from '../classe.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-modifie-classe',
  templateUrl: './modifie-classe.component.html',
  styleUrls: ['./modifie-classe.component.css']
})
export class ModifieClasseComponent implements OnInit {
  public classe : Classe;
  private url : string;

  constructor(private formBuilder:FormBuilder ,private apiService:ClasseService,
    private router:ActivatedRoute,
    private dialog:DialogService,
    private  route:Router) { }
    formEdit = new FormGroup({ });
   
 


 
 ngOnInit(): void {
  this.formEdit=this.formBuilder.group({
    nom : ['',[Validators.required, Validators.pattern("([A-Z])(?=.*[a-zA-Z]).{2,}")]],
    effectif : ['',[Validators.required, Validators.min(2), Validators.max(50)]],
    niveau : ['',Validators.required],
    domaine : ['',[Validators.required, Validators.pattern("([A-Z]).{5,}")]],
  });
   this.url=this.router.snapshot.params.id
  this.apiService.getClasseById(this.url).
      subscribe(data=>{
                    this.classe=data;
                    console.log(this.classe);
      }, err=>{
          console.log(err);
         } 
  );


 }
 onSubmit(){
   console.log(this.formEdit.value);
   console.log(this.url);
   this.apiService.UpdateClasse(this.url, this.formEdit.value).
   subscribe( data => {
     console.log(data);
     alert(" Classe  "+this.formEdit.value.nom+"  modifiee avec succes ");
     this.route.navigate(['classes']);
     }, err=>{
       console.log(err);
       alert("Cette classe existe deja !");

     });  

 }


}
