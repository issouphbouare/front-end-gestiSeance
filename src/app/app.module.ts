import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutClasseComponent } from './ajout-classe/ajout-classe.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { ModifieClasseComponent } from './modifie-classe/modifie-classe.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeProfesseurComponent } from './liste-professeur/liste-professeur.component';
import { AjoutProfesseurComponent } from './ajout-professeur/ajout-professeur.component';
import { ModifieProfesseurComponent } from './modifie-professeur/modifie-professeur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClasseService } from './classe.service';
import { ProfesseurService } from './professeur.service';
import { SeanceService } from './seance.service';
import { ListeSeanceComponent } from './liste-seance/liste-seance.component';
import { DetailSeanceComponent } from './detail-seance/detail-seance.component';
import { AjoutSeanceComponent } from './ajout-seance/ajout-seance.component';
import { ModifieSeanceComponent } from './modifie-seance/modifie-seance.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProfilComponent } from './profil/profil.component';
import { HonoraireComponent } from './honoraire/honoraire.component';
import { HonoraireService } from './honoraire.service';
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { ModifieMatiereComponent } from './modifie-matiere/modifie-matiere.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { SeancesPrComponent } from './seances-pr/seances-pr.component';
import { ArchivesPrComponent } from './archives-pr/archives-pr.component';
import { HonorairePrComponent } from './honoraire-pr/honoraire-pr.component';
import { AjoutPayerComponent } from './ajout-payer/ajout-payer.component';
import { AddSeanceComponent } from './add-seance/add-seance.component';
import { ArchivesComponent } from './archives/archives.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { PasswordComponent } from './password/password.component';
import { RoleComponent } from './role/role.component';
import { ModiePayerComponent } from './modie-payer/modie-payer.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    AjoutClasseComponent,
    ListeClasseComponent,
    ModifieClasseComponent,
    AccueilComponent,
    ListeProfesseurComponent,
    AjoutProfesseurComponent,
    ModifieProfesseurComponent,
    ListeSeanceComponent,
    DetailSeanceComponent,
    AjoutSeanceComponent,
    ModifieSeanceComponent,
    LoginComponent,
    ProfilComponent,
    HonoraireComponent,
    ListeMatiereComponent,
    ModifieMatiereComponent,
    AddMatiereComponent,
    SeancesPrComponent,
    ArchivesPrComponent,
    HonorairePrComponent,
    AjoutPayerComponent,
    AddSeanceComponent,
    ArchivesComponent,
    BulletinComponent,
    PasswordComponent,
    RoleComponent,
    ModiePayerComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [
    ClasseService,
    ProfesseurService,
    SeanceService,
    AuthService,
    HonoraireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
