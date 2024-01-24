import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { firebaseConfig } from 'src/environment/entironment';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private http: HttpClient) { }

  addCategory(category: string): Observable<{category: string}>{
    return this.http.put<{category: string}>(firebaseConfig.endpoints.categories + category + '.json', {category})
  }

  getAllCategories(): Observable<string[]>{
    return this.http.get<string[]>(firebaseConfig.endpoints.categories + '.json').pipe(
      map(item => Object.keys(item))
    )
  }
}
