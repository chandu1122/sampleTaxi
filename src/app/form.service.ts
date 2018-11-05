import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {

   }

  
    saveData(myData) {
      const reservationposturl = 'http://localhost:3000/api/homeForm/';
      return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(reservationposturl, JSON.stringify({data:myData}) ,{ headers: headers })
      .subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
      });
      });
      }
    
      contactData(cData) {
        const reservationposturl = 'http://localhost:3000/api/contactForm/';
        return new Promise((resolve, reject) => {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        this.http.post(reservationposturl, JSON.stringify({data:cData}) ,{ headers: headers })
        .subscribe(res => {
        resolve(res);
        }, (err) => {
        reject(err);
        });
        });
        }
}

