import { Injectable } from '@angular/core';
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
    this.http.get<Feedback[]>(this.baseUrl).subscribe({
      next: d => this.data = d
    });
  }

  getAll() {
    return this.data;
  }

  get(id: number) {
    //FIXME 404 error
    let x = this.http.get<Feedback>(this.baseUrl + "/" + id);
    return x
  }

  add(f: Feedback) {
    this.http.post<Feedback>(this.baseUrl, f).subscribe({
      next: _ => this.data.push(f)
    })
  }

  getHomeFeeds(): Observable<Feedback[]> {

    let observables: Observable<Feedback>[] = [
      this.get(1),
      this.get(2),
      this.get(3)
    ]
    return forkJoin(observables);
  }
}
