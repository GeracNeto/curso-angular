import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Names } from '../Names';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  private apiUrlNames = 'http://localhost:3000/names';

  constructor(private http: HttpClient) {}

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((item) => item.name !== animal.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getNamesAPI(): Observable<Names[]> {
    return this.http.get<Names[]>(this.apiUrlNames);
  }
}
