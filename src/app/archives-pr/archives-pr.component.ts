import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Payer } from '../payer';
import { PayerService } from '../payer.service';
import { Professeur } from '../professeur';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-archives-pr',
  templateUrl: './archives-pr.component.html',
  styleUrls: ['./archives-pr.component.css']
})
export class ArchivesPrComponent implements OnInit {

  public archivesPr;
  private url : string
  
  constructor(private apiService: ProfesseurService, private payerService : PayerService,
    private router:ActivatedRoute, public authService :AuthService,
    private  route:Router) { }
   

  ngOnInit(): void {
    this.url=this.router.snapshot.params.id
    this.onGetArchive();
    
  }
  onGetArchive(){
    this.apiService.getArchiveProfById(this.url).
    subscribe(data=>{
                  this.archivesPr=data;
                  console.log(this.archivesPr);
    }, err=>{
        console.log(err);
       } 
);
  }
  onDelete(c){
    if(confirm("Voulez-vous vraiment supprimer cette seance  ?")){
      console.log(c);
      this.payerService.deletePayer(c._links.self.href)
      .subscribe( data=>{
        this.onGetArchive();
    
        }, err=>{
          console.log(err);
        }
      );

    alert("Archive  supprimee avec succes");
  }
    
  }


}
