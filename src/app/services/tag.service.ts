import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

@Injectable()
export class TagService {

  private serviceUrl = 'http://localhost:3000/tagList';

  constructor(private http: Http) { }

  getTags(): Observable<string[]> {
    return this.http.get( this.serviceUrl )
      .map( res => res.json() )
      .catch( this.handleError );
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError( error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response ) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
