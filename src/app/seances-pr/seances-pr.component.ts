import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-seances-pr',
  templateUrl: './seances-pr.component.html',
  styleUrls: ['./seances-pr.component.css']
})
export class SeancesPrComponent implements OnInit {

  public seancePr ;
  private pr : Professeur;
  private url : string;
  private total: number=0;
  
  constructor(private apiService: ProfesseurService,
    private router:ActivatedRoute, private seanceService : SeanceService,
    private  route:Router) { }
   

  ngOnInit(): void {
    this.url=this.router.snapshot.params.id
    this.onGetAllSeance();

    
  }
  onGetAllSeance(){
    this.apiService.getSeanceProfById(this.url).
        subscribe(data=>{
                      this.seancePr=data;
                      console.log(this.seancePr);
                      
        }, err=>{
            console.log(err);
           } 
    );
  }

  
  
  onDelete(c){
    if(confirm("Voulez-vous vraiment supprimer la seance  ?")){
      console.log(c);
      this.seanceService.deleteSeance(c._links.self.href)
      .subscribe( data=>{
        this.onGetAllSeance();
    
        }, err=>{
          console.log(err);
        }
      );

    alert("Seance  supprimee");
  }
    
  }

}
