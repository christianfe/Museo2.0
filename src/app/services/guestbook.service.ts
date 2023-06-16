import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getPage(id: number, page: number, limit: number) {
    let x = this.http.get<Feedback[]>(this.baseUrl + "?link=" + id + "&_sort=id&_order=desc&_page=" + page + "&_limit=" + limit);
    return x
  }

  add(f: Feedback) {
    this.http.post<Feedback>(this.baseUrl, f).subscribe({
      next: _ => this.data.push(f)
    })
  }

  getHomeFeeds(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.baseUrl + "?_sort=id&_order=desc&_page=1&_limit=5&link=-1");
  }
}
