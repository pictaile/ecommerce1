import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {shareReplay} from 'rxjs/operators';

//const TIMEOUT = 10000;
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected caches;
  protected configUrl = ' https://reqres.in/api/users';
  
  constructor(protected http: HttpClient) {

  }
  
  public sendWithCache(request$, page) {
	  
	if(!this.caches[page]) {
       this.caches[page] = request$.pipe(
	     shareReplay(1)
	   );
	}

    return this.caches[page];	
  }
}
