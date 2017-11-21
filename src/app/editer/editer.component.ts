import { Component, OnInit } from '@angular/core';
import {Collaborateur} from '../shared/domain/collaborateur'
import {CollaborateurService} from '../shared/service/collaborateur.service'
import {Departement} from '../shared/domain/departement'
import {DepartementService} from '../shared/service/departement.service'
import {Poste} from '../shared/domain/poste'
import {PosteService} from '../shared/service/poste.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  collaborateur:Collaborateur = new Collaborateur();
  public departements:Departement[];
  public postes:Poste[];
  id:number;
  public hit;

  constructor(public collaborateurService:CollaborateurService, public departementService:DepartementService, public posteService:PosteService, route:ActivatedRoute) {

  route.params.subscribe(params => {this.id = params['id'];
  });
}
  ngOnInit() {

    this.collaborateurService.listerCollaborateur().then(collaborateurs => this.collaborateur = collaborateurs.filter(c => c.id == this.id)[0]);
    this.departementService.listerDepartement().then(departements => this.departements = departements);
    this.posteService.listerPoste().then(postes => this.postes = postes);
    this.hit = true;
  }

  edit(idCollab:HTMLInputElement, nom:HTMLInputElement, prenom:HTMLInputElement, adresse:HTMLInputElement, codePostal:HTMLInputElement, ville:HTMLInputElement, departement:HTMLSelectElement, poste:HTMLSelectElement) {
    const collab = new Collaborateur(nom.value,prenom.value,adresse.value,codePostal.value,ville.value, +departement.value,+poste.value)
    collab.id =this.id;

    this.collaborateurService.editCollaborateur(collab);
    console.log(nom.value);
    this.hit = false;
    nom.value = "";
    prenom.value = "";
    adresse.value = "";
    codePostal.value = "";
    ville.value = "";
    return false;
  }

}
