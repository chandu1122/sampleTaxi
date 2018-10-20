import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
// import {Observable} from 'rxjs/Rx';


@Injectable()
export class AuthenticationService {

  constructor(public http: Http) { }

  /* async checkOut(result, chargedetails): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    const response = await this.http.post('http://localhost:5000/api/checkout',
    { checkoutData: result, chargedetails: chargedetails }, options).catch((error: any) =>
    Observable.throw(error.json().error || 'Server error')).map(res => res.json()).toPromise();
    return response;
  } */

}
