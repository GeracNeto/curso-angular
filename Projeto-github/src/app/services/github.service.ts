import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Repo } from '../Repo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  search(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.apiUrl}/${username}/repos`);
  }
}
