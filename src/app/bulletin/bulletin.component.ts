import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payer } from '../payer';
import { PayerService } from '../payer.service';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {

 
  public payer : Payer;
  public prof;
  private url : string;

  constructor( private apiService: PayerService,
    private router:ActivatedRoute, private profService : ProfesseurService,
    private  route:Router) { }
   
 


 
 ngOnInit(): void {
  
   this.url=this.router.snapshot.params.id
   console.log(this.url);
  this.apiService.getPayerById(this.url).
      subscribe(data=>{
                    this.payer=data;
                    console.log(this.payer);
      }, err=>{
          console.log(err);
         });
   
    this.profService.getProfById(this.url+"/professeur").
      subscribe(data=>{
                    this.prof=data;
                    console.log(this.prof);
      }, err=>{
          console.log(err);
         });


  }

  

 

}
