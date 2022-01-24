import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../classe.service';

@Component({
  selector: 'app-ajout-classe',
  templateUrl: './ajout-classe.component.html',
  styleUrls: ['./ajout-classe.component.css']
})
export class AjoutClasseComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private apiService: ClasseService,
    private  router:Router) { }
  formAdd = new FormGroup({ });

  ngOnInit() {
    this.formAdd=this.formBuilder.group({
      nom : ['',[Validators.required, Validators.pattern("([A-Z])(?=.*[a-zA-Z]).{1,}")]],
      effectif : ['',[Validators.required, Validators.min(2), Validators.max(50)]],
      niveau : ['',Validators.required],
      domaine : ['',[Validators.required, Validators.pattern("([A-Z]).{4,}")]],
    });
  }
onSubmit(){
  console.log(this.formAdd.value);
  this.apiService.CreateClasse(this.formAdd.value).
  subscribe( data => {
      alert("Classe : "+this.formAdd.value.nom+
      "  Effettif : "+this.formAdd.value.effectif+
      "  Niveau : "+this.formAdd.value.niveau+
      "  Domaine : "+this.formAdd.value.domaine+
      "  ajoutee avec succes !"); 
      this.router.navigate(['classes']);
    },err=>{
      console.log(err);
      alert("Cette Classe existe deja !");

    });  


  }
  
}
