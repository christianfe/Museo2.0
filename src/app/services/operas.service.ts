import { Injectable, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Opera } from '../models/opera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stanza } from '../models/stanza';

@Injectable({
  providedIn: 'root'
})


export class OperasService {
  baseUrl = environment.apiUrl + "opere/";
  data: Opera[] = []

  constructor(private http: HttpClient) { }

  getAll() {

  }
  get(id: number) {
    return this.http.get<Opera>(this.baseUrl+ id)
  }
  getOperaByAuthor(idAuhtor: number) {
    return this.http.get<Opera[]>(this.baseUrl + "?autore=" + idAuhtor)
  }
  getOperaByStanza(idStanza: number) {
    return this.http.get<Opera[]>(this.baseUrl + "?stanza=" + idStanza)
  }
}
