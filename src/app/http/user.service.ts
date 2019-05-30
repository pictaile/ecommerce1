import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  
  constructor(protected http: HttpClient) {
	super(http)
  }
  
  
  public getList(page) {
	const request$ = this.http.get(`${this.configUrl}?page=${page}`);

    return this.sendWithCache(request$,page);	
  }
  
  
}
