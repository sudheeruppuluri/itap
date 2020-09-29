import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  url = 'http://211.24.105.178/kpcmtos/';

  getData(source: string) {
    return this.http.get(source).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  getVesselDetails(request: any): Observable<any> {
    return this.http.post(this.url+'cockpit/vesselVisitDetailsAll',request);
  }

  validateLogin(request: any): Observable<any> {
    return this.http.post(this.url+'cockpit/loginAuthentication',request);
  }

  getDashdboardDetails(): Observable<any> {
    return this.http.get(this.url + 'cockpit/dashBoardDetails');
  }

  private handleError(error: any) {
    return observableThrowError(error.error || 'Server error');
  }
}
