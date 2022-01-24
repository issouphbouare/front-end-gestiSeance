import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-ajout-professeur',
  templateUrl: './ajout-professeur.component.html',
  styleUrls: ['./ajout-professeur.component.css']
})
export class AjoutProfesseurComponent implements OnInit {
  public password : string='0000';
  public role : string='User';

  constructor(private formBuilder:FormBuilder, public authService : AuthService,
    private apiService: ProfesseurService,
    private  router:Router) { }
  formAdd = new FormGroup({ });

  ngOnInit() {
    this.formAdd=this.formBuilder.group({
      tel : ['',[Validators.required, Validators.maxLength(10)]],
      nom : ['',[Validators.required, Validators.pattern("([A-Z]){3,}")]],
      prenom : ['',[Validators.required, Validators.pattern("([A-Z]).{2,}")]],
      password : ['',[Validators.required]],
      role : ['',[Validators.required]]
    });
  }
onSubmit(){ 
      console.log(this.formAdd.value);
      this.apiService.CreateProf(this.formAdd.value).
      subscribe( data => {
          alert("Le Compte du Professeur Mr/Mme : "+this.formAdd.value.nom+
          "  de login : "+this.formAdd.value.tel+
          "  et de mot de passe : 0000 est cree avec succes !"); 
          this.router.navigate(['login']);
           this.authService.logout();
        },err=>{
          console.log(err);
          alert("Il  existe deja un Professeur avec le meme numero de telephone "+this.formAdd.value.tel);
        });

  }
  
}
