import { Classe } from "./classe";
import { Matiere } from "./matiere";
import { Professeur } from "./professeur";

export class Seance {
    id : number;
    date : Date;
    horaire : string;
    type : string;
    duree : number;
    titre : string;
    contenu : string;

    professeur : Professeur;
    classe : Classe;
    matiere : Matiere;
    
}
