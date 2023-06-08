import { Injectable, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  baseUrl = environment.apiUrl + "feedback";
  data: Feedback[] = []
  constructor(private http: HttpClient) {

  }


  getAll(link: number) {
    return this.http.get<Feedback[]>(this.baseUrl + "?link=" + link)
  }

  get(id: number) {
    let x = this.http.get<Feedback>(this.baseUrl + "/" + id);
    return x
  }

  add(f: Feedback) {
    this.http.post<Feedback>(this.baseUrl, f).subscribe({
      next: _ => this.data.push(f)
    })
  }

  getHomeFeeds(): Observable<Feedback[]> {
    //FIXME
    let observables: Observable<Feedback>[] = [
      this.get(1),
      this.get(2),
      this.get(3)
    ]
    return forkJoin(observables);
  }
}
