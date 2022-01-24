import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatiereService } from '../matiere.service';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private apiService: MatiereService,
    private  router:Router) { }
  formAdd = new FormGroup({ });


  ngOnInit(): void {
    this.formAdd=this.formBuilder.group({
      nom : ['',[Validators.required, Validators.pattern("([A-Z]).{2,}")]],
    });
    
  }

  onSubmit(){ 
    console.log(this.formAdd.value);
    this.apiService.CreateMatiere(this.formAdd.value).
    subscribe( data => {
        alert("Matiere : "+this.formAdd.value.nom+
        "  ajoutée avec succes  !"); 
        this.router.navigate(['matieres']);
      },err=>{
        console.log(err);
        alert("Cette matiere existe deja !");
      });

}

}
