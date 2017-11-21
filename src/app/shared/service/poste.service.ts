import { Injectable } from '@angular/core';
import { Poste } from '../domain/poste';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PosteService {

  constructor(private http:HttpClient) { }

  listerPoste():Promise<Poste[]> {
    return this.http.get<Poste[]>('http://localhost:8080/postes').toPromise()
  }
}
