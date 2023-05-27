import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Notizia } from '../models/notizia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = environment.apiUrl + "notizie/";

  //news!: Observable<Notizia[]>;

  constructor(private http: HttpClient) {
   }

  getAll(): Observable<Notizia[]>{
    return this.http.get<Notizia[]>(this.baseUrl);
  }

  get(id: number): Observable<Notizia>{
    return this.http.get<Notizia>(this.baseUrl + "?id=" + id);

    //return this.http.get<Notizia>(this.baseUrl + "?id=" + id);
  }
}
