import { Injectable } from '@angular/core';
import { Collaborateur } from '../domain/collaborateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Departement} from '../domain/departement'

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CollaborateurService {

  constructor(private http:HttpClient) { }

  saveCollaborateur(newCollaborateur:Collaborateur):Promise<Collaborateur> {
    return this.http.post<Collaborateur>('http://localhost:8080/collaborateurs',newCollaborateur).toPromise()
  }

  listerCollaborateur():Promise<Collaborateur[]> {
    return this.http.get<Collaborateur[]>('http://localhost:8080/collaborateurs').toPromise()
  }

  editCollaborateur(editCollaborateur:Collaborateur):Promise<Collaborateur> {

    return this.http.put<Collaborateur>('http://localhost:8080/collaborateurs/' ,editCollaborateur).toPromise()
  }
}
