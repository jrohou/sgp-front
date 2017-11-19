import { Component, OnInit } from '@angular/core';
import {Collaborateur} from '../shared/domain/collaborateur'
import {CollaborateurService} from '../shared/service/collaborateur.service'
@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent implements OnInit {

  public collaborateur:Collaborateur[];
  public hit;

  constructor(public collaborateurService:CollaborateurService) { }

  ngOnInit() {
    this.hit = true;
  }

  add(nom:HTMLInputElement, prenom:HTMLInputElement, adresse:HTMLInputElement, codePostal:HTMLInputElement, ville:HTMLInputElement) {
    this.collaborateurService.saveCollaborateur(new Collaborateur(nom.value,prenom.value,adresse.value,codePostal.value,ville.value));
    this.hit = false;
    nom.value = "";
    prenom.value = "";
    adresse.value = "";
    codePostal.value = "";
    ville.value = "";
    return false;
  }

}
