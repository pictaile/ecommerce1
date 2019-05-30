import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService  extends BaseService {

  constructor(protected http: HttpClient) {
	super(http)
  }

  public getUser(id) {
	return  this.http.get(`${this.configUrl}?id=${id}`);	
  }
  
}
