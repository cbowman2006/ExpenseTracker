import { Account } from './../types/account';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private http: HttpClient, @Inject("ORIGIN_URL") private originUrl:string) { }

getAccounts(){
  return this.http.get<Account[]>(`${this.originUrl}/api/account/all`);
}

createAccount(newAccount:Account):Observable<Account>{
  return this.http.post<Account>(`${this.originUrl}/api/account/create`, newAccount);
}

UpdateAccount(updateAccount:Account):Observable<Account>{
  return this.http.post<Account>(`${this.originUrl}/api/account/create`, updateAccount);
}

deleteAccount(deleteAccount:Account):Observable<boolean>{
  return this.http.post<boolean>(`${this.originUrl}/api/account/create`, deleteAccount);
}

}
