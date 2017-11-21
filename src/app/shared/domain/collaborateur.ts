import {Departement} from './departement'
import {Poste} from './poste'

export class Collaborateur {
  id:number;
  actif:boolean;
  departement:Departement
  poste:Poste
  constructor(public nom?:string, public prenom?:string, public adresse?:string, public codePostal?:string, public ville?:string, public departementId?:number, public posteId?:number) {
    
    this.poste = new Poste()
    this.poste.id = posteId
    this.departement = new Departement()
    this.departement.id = departementId
  }
}
