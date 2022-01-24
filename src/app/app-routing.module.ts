import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { AddSeanceComponent } from './add-seance/add-seance.component';
import { AjoutClasseComponent } from './ajout-classe/ajout-classe.component';
import { AjoutPayerComponent } from './ajout-payer/ajout-payer.component';
import { AjoutProfesseurComponent } from './ajout-professeur/ajout-professeur.component';
import { AjoutSeanceComponent } from './ajout-seance/ajout-seance.component';
import { ArchivesPrComponent } from './archives-pr/archives-pr.component';
import { ArchivesComponent } from './archives/archives.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DetailSeanceComponent } from './detail-seance/detail-seance.component';
import { HonorairePrComponent } from './honoraire-pr/honoraire-pr.component';
import { HonoraireComponent } from './honoraire/honoraire.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { ListeProfesseurComponent } from './liste-professeur/liste-professeur.component';
import { ListeSeanceComponent } from './liste-seance/liste-seance.component';
import { LoginComponent } from './login/login.component';
import { ModiePayerComponent } from './modie-payer/modie-payer.component';
import { ModifieClasseComponent } from './modifie-classe/modifie-classe.component';
import { ModifieMatiereComponent } from './modifie-matiere/modifie-matiere.component';
import { ModifieProfesseurComponent } from './modifie-professeur/modifie-professeur.component';
import { ModifieSeanceComponent } from './modifie-seance/modifie-seance.component';
import { PasswordComponent } from './password/password.component';
import { ProfilComponent } from './profil/profil.component';
import { RoleComponent } from './role/role.component';
import { SeancesPrComponent } from './seances-pr/seances-pr.component';
//import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path : "matieres" , component : ListeMatiereComponent },
  {path : "classes" , component : ListeClasseComponent },
  {path : "ajoutClasse" , component : AjoutClasseComponent },
  {path : "modifieClasse/:id" , component : ModifieClasseComponent },
  {path : "professeurs" , component : ListeProfesseurComponent },
  {path:  "login", component: LoginComponent},
  {path : "ajoutProfesseur" , component : AjoutProfesseurComponent },
  {path : "modifieProfesseur/:id" , component : ModifieProfesseurComponent },
  {path : "ajoutSeance/:id" , component : AjoutSeanceComponent },
  {path : "addSeance" , component : AddSeanceComponent },

  {path : "detailSeance/:id" , component : DetailSeanceComponent },
  {path : "modifieSeance/:id" , component : ModifieSeanceComponent },
  {path : "modifiePayer/:id" , component : ModiePayerComponent },
  {path : "seances" , component : ListeSeanceComponent },
  {path : "" , component : LoginComponent },
 {path : "profil" , component : ProfilComponent },
  {path : "honoraire" , component : HonoraireComponent },
  {path : "archive" , component : ArchivesComponent },
  {path : "bulletin/:id" , component : BulletinComponent },
  {path : "modifieMatiere/:id" , component : ModifieMatiereComponent },
  {path : "seancesPr/:id" , component : SeancesPrComponent },
  {path : "role/:id" , component : RoleComponent },
  {path : "archivesPr/:id" , component : ArchivesPrComponent },
  {path : "honorairePr/:id" , component : HonorairePrComponent },
  {path : "ajoutP/:id" , component : AjoutPayerComponent },
  {path : "ajoutMatiere" , component : AddMatiereComponent },
  {path : "password" , component : PasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
