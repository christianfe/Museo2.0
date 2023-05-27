import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Notizia } from '../models/notizia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = environment.apiUrl + "notizie";

  //news!: Observable<Notizia[]>;

  constructor(private http: HttpClient) {
   }

  getAll(): Observable<Notizia[]>{
    return this.http.get<Notizia[]>(this.baseUrl);
  }


  //questo non va
  get(id: number): Observable<Notizia>{
    return this.http.get<Notizia>(this.baseUrl, {params: new HttpParams().set("id", id)});
  }

  //questo non va
  get1(id: number):Observable<Notizia>{
    return this.http.get<Notizia>(this.baseUrl + "/?id=1");
  }

  //questo non va
  get2(id: number):Observable<Notizia>{
    return this.http.get<Notizia>(this.baseUrl + "/?id=1");
  }
  //questo va
  get3(id: number):Observable<Notizia>{
    return this.http.get<Notizia>(this.baseUrl + "/1");
  }

  //SCOPERTA NOTTURNA: in qualche modo le query string nelle url fanno scazzare angular

}
