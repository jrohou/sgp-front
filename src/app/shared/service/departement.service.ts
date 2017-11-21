import { Injectable } from '@angular/core';
import { Departement } from '../domain/departement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class DepartementService {

  constructor(private http:HttpClient) { }

  listerDepartement():Promise<Departement[]> {
    return this.http.get<Departement[]>('http://localhost:8080/departements').toPromise()
  }
}
