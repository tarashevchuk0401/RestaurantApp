import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Dish } from 'src/app/shared/types/dish.interface';
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

  addDish(newDish: Dish): Observable<Dish>{
    return this.http.put<Dish>(firebaseConfig.endpoints.menu + newDish.id +'.json', newDish)
  }

  getMenu(): Observable<Array<Dish>>{
    return this.http.get<Array<Dish>>(firebaseConfig.endpoints.menu + '.json')
    .pipe(
      map(result => Object.values(result))
    )
  }

  getDishById(id: string):Observable<Dish>{
    return this.http.get<Dish>(firebaseConfig.endpoints.menu + `/${id}.json`)
  }
  
  deleteDish(id:string):Observable<Dish>{

    return this.http.delete<Dish>(firebaseConfig.endpoints.menu + `/${id}.json`)

  }
}
