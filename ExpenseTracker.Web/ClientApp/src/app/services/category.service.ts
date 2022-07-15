import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http: HttpClient, @Inject("ORIGIN_URL") private originUrl:string) { }

getCategories(){
  return this.http.get<Category[]>(`${this.originUrl}/api/category/all`);
}

createCreate(newCategory:Category):Observable<Category>{
  return this.http.post<Category>(`${this.originUrl}/api/category/create`, newCategory);
}

UpdateCreate(updateCategory:Category):Observable<Category>{
  return this.http.post<Category>(`${this.originUrl}/api/category/create`, updateCategory);
}

deleteCreate(deleteCategory:Category):Observable<boolean>{
  return this.http.post<boolean>(`${this.originUrl}/api/category/create`, deleteCategory);
}

}
