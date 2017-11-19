import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../shared/domain/collaborateur';
import { CollaborateurService } from '../shared/service/collaborateur.service';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {
public collaborateurs:Collaborateur[];
public hit;
  constructor(public collaborateurService:CollaborateurService) { }

  ngOnInit() {
    this.hit = true;
    this.collaborateurService.listerCollaborateur().then((data) => this.collaborateurs = data);
  }

}
