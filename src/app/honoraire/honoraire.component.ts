import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Honoraire } from '../honoraire';
import { HonoraireService } from '../honoraire.service';
import { TotalHonoraire } from '../total-honoraire';

@Component({
  selector: 'app-honoraire',
  templateUrl: './honoraire.component.html',
  styleUrls: ['./honoraire.component.css']
})
export class HonoraireComponent implements OnInit {

  public honoProfs;
  public total : TotalHonoraire;


  constructor(private http: HttpClient,
    private apiService: HonoraireService,
    private router : Router) { }

  ngOnInit(): void {
      this.apiService.getAllHonoraire()
      .subscribe(data=>{
      this.honoProfs=data;
      console.log(this.honoProfs);
    }, err=>{
      console.log(err);
    });
    this.apiService.HonoraireTotal()
      .subscribe(data=>{
      this.total=data;
      console.log(this.total);
    }, err=>{
      console.log(err);
    });
  
    
  }

}
