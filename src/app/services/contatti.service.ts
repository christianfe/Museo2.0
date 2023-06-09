import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contatto } from '../models/contatto';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {
  baseUrl = environment.apiUrl + "contatti";
  constructor(private http: HttpClient) { }

  addContact(c: Contatto) {
    this.http.post<Contatto>(this.baseUrl, c).subscribe();
  }
}
