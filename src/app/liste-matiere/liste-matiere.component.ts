import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Matiere } from '../matiere';
import { MatiereService } from '../matiere.service';

@Component({
  selector: 'app-liste-matiere',
  templateUrl: './liste-matiere.component.html',
  styleUrls: ['./liste-matiere.component.css']
})
export class ListeMatiereComponent implements OnInit {

  public matieres;
  public currentPage: number=0;
  public size : number=5;
  public nbPage : number;
  public pages : Array<number>;


  constructor(private http: HttpClient,
    private apiService: MatiereService,
    private router : Router) { }

  ngOnInit(): void {
    this.onGetAllMatiere();
  }

  onGetAllMatiere(){
    this.apiService.getMatieres(this.currentPage, this.size)
    .subscribe(data=>{
    this.nbPage=data["page"].totalPages;
    this.pages=new Array<number>(this.nbPage);
    this.matieres=data;

  }, err=>{
    console.log(err);
  })

  }

  goToPage(i){
    this.currentPage=i;
    this.onGetAllMatiere();
  }

  onDelete(m){
    if(confirm("Voulez-vous vraiment supprimer la matiere  "+m.nom_matiere+ " ?")){
      console.log();
      this.apiService.deleteMatiere(m._links.self.href)
      .subscribe( data=>{
        this.onGetAllMatiere();
    
        }, err=>{
          console.log(err);
        }
      );

    alert("Matiere "+m.nom_matiere+  " supprimé avec succes");
  }
    
  }


}
