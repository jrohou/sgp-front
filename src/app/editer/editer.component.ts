import { Component, OnInit } from '@angular/core';
import {Collaborateur} from '../shared/domain/collaborateur'
import {CollaborateurService} from '../shared/service/collaborateur.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  collaborateur:Collaborateur;
  id:number;

  constructor(public collaborateurService:CollaborateurService, route:ActivatedRoute) {

  route.params.subscribe(params => {this.id = params['id'];
  });
}
  ngOnInit() {

    this.collaborateurService.listerCollaborateur().then(collaborateurs => this.collaborateur = collaborateurs.filter(c => c.id == this.id)[0]);
  }

}
