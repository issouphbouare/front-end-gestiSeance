import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seance } from '../seance';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-liste-seance',
  templateUrl: './liste-seance.component.html',
  styleUrls: ['./liste-seance.component.css']
})
export class ListeSeanceComponent implements OnInit {

  public seances;
  public currentPage: number=0;
  public size : number=5;
  public nbPage : number;
  public pages : Array<number>;


  constructor(private http: HttpClient,
    private apiService: SeanceService,
    private router : Router) { }

  ngOnInit(): void {
    this.onGetAllSeance();
  }

  onGetAllSeance(){
    this.apiService.getSeances(this.currentPage, this.size)
    .subscribe(data=>{
    this.nbPage=data["page"].totalPages;
    this.pages=new Array<number>(this.nbPage);
    this.seances=data;
    console.log(this.seances);

  }, err=>{
    console.log(err);
  })

  }

  goToPage(i){
    this.currentPage=i;
    this.onGetAllSeance();
  }

  onDelete(c){
    if(confirm("Voulez-vous vraiment supprimer la seance  ?")){
      console.log(c);
      this.apiService.deleteSeance(c._links.self.href)
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
