import { Seance } from "./seance";

export class Classe {
    id : number;
    nom : string;
    effectif : number;
    niveau : string;
    domaine : string;
    seances : Seance[];
}
