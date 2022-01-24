import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayerService } from '../payer.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  public archives;
  public currentPage: number=0;
  public size : number=5;
  public nbPage : number;
  public pages : Array<number>;


  constructor(private http: HttpClient,
    private apiService: PayerService,
    private router : Router) { }

  ngOnInit(): void {
    this.onGetAllArchive();
  }

  onGetAllArchive(){
    this.apiService.getPayers(this.currentPage, this.size)
    .subscribe(data=>{
    this.nbPage=data["page"].totalPages;
    this.pages=new Array<number>(this.nbPage);
    this.archives=data;
    console.log(this.archives);

  }, err=>{
    console.log(err);
  })

  }

  goToPage(i){
    this.currentPage=i;
    this.onGetAllArchive();
  }

  onDelete(c){
    if(confirm("Voulez-vous vraiment supprimer la seance  ?")){
      console.log(c);
      this.apiService.deletePayer(c._links.self.href)
      .subscribe( data=>{
        this.onGetAllArchive();
    
        }, err=>{
          console.log(err);
        }
      );

    alert("Archive  supprimee avec succes");
  }
    
  }


}
