import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DialogService } from '../dialog.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public prof : Professeur;
  private url : string;
  public mode : number=0;

  constructor(private formBuilder:FormBuilder ,private apiService: ProfesseurService,
    private router:ActivatedRoute,
    private authService : AuthService,
    private  route:Router) { }
    formEdit = new FormGroup({ });
   
 


 
 ngOnInit(): void {
  this.formEdit=this.formBuilder.group({
    tel : ['',[Validators.required, Validators.maxLength(10)]],
    nom : ['',[Validators.required, Validators.pattern("([A-Z]){3,}")]],
    prenom : ['',[Validators.required, Validators.pattern("([A-Z]).{2,}")]],
    password : ['',[Validators.required]],
      role : ['',[Validators.required]]
  });
   this.url=this.router.snapshot.params.id;
   console.log(this.url);
  this.apiService.getProfById(this.url).
      subscribe(data=>{
                    this.prof=data;
                    console.log(this.prof);
      }, err=>{
          console.log(err);
         } 
  );
 }
 ChangeR(){
  this.mode=1;
}

 onSubmit(){
   console.log(this.formEdit.value);
   console.log(this.url);
   this.apiService.UpdateProf(this.url, this.formEdit.value).
   subscribe( data => {
     console.log(data);
     alert(" Vous avez désormais le role : "+this.formEdit.value.role);
     this.authService.logout();
    }, err=>{
       console.log(err);
       alert("Il  existe deja un Professeur avec le meme numero de telephone "+this.formEdit.value.tel);

     });  

 }


}
