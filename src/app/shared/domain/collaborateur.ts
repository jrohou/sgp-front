export class Collaborateur {
  id:number;
  actif:boolean;
  constructor(public nom?:string, public prenom?:string, public adresse?:string, public codePostal?:string, public ville?:string) {

  }
}
