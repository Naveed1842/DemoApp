import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
//import {IPatient} from './patient';
@Injectable()
export class PatientService {
  private _patientUrl = './api/patients/patient.json';

    constructor(private _http: HttpClient) { }

    getPatient(uuid:string):Observable<any> {
      console.log(this._patientUrl);
      return this._http.get(this._patientUrl)
        .map(res => res as any)
        .do(data => console.log('getPatient: ',data))
        .catch(this.handleError);
    }
    /*getPatients(limit: number, startIndex: number): Observable<Patient[]> {
      return this.http.get(`${this.webapiURL}${this.methodName}?limit=${limit}&startIndex=${startIndex}`)
        .map(res => res.json() as Patient[])
        .do(data => console.log('patients ' + JSON.stringify(data)))
        .catch(this.handleError);
    }*/
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}