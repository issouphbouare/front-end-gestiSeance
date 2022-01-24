import { ResourceLoader } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontCahierTextes';
  public cu: number;
  @Input() user: any=localStorage.getItem('user');
  constructor (private router : Router, public authService : AuthService){}
  ngOnInit(): void{
    let isloggedin: string;
    let loggedProf;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedProf = localStorage.getItem('loggedProf');
    if (isloggedin!="true" || !loggedProf)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedProfFromLocalStorage(loggedProf);

  }
  onDeconnecter(){
    //localStorage.removeItem('user');
    //this.router.navigate(['/login']);
    this.authService.logout();

  }

  

}
