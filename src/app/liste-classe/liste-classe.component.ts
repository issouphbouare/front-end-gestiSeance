import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from '../classe';
import { ClasseService } from '../classe.service';


@Component({
  selector: 'app-liste-classe',
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css']
})
export class ListeClasseComponent implements OnInit {

  public classes;
  public currentPage: number=0;
  public size : number=5;
  public nbPage : number;
  public pages : Array<number>;


  constructor(private http: HttpClient,
    private apiService: ClasseService,
    private router : Router) { }

  ngOnInit(): void {
    this.onGetAllClasse();
  }

  onGetAllClasse(){
    this.apiService.getClasses(this.currentPage, this.size)
    .subscribe(data=>{
    this.nbPage=data["page"].totalPages;
    this.pages=new Array<number>(this.nbPage);
    this.classes=data;

  }, err=>{
    console.log(err);
  })

  }

  goToPage(i){
    this.currentPage=i;
    this.onGetAllClasse();
  }

  onDelete(c){
    if(confirm("Voulez-vous vraiment supprimer la classe  "+c.nom_classe+ " ?")){
      console.log(c);
      this.apiService.deleteClasse(c._links.self.href)
      .subscribe( data=>{
        this.onGetAllClasse();
    
        }, err=>{
          console.log(err);
        }
      );

    alert("classe "+c.nom_classe+  " supprimee");
  }
    
  }

  

}
