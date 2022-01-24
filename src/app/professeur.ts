import { Payer } from "./payer";
import { Seance } from "./seance";

export class Professeur {
    id : number;
    tel : number;
    nom : string;
    prenom : string;
    seances : Seance[]
    payers : Payer[];
    password : string;
    role : string;

    
}

