import { Injectable } from '@angular/core';
/* import { Observable } from 'rxjs';
 */import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

  test: BehaviorSubject<Object> = new BehaviorSubject('');

  constructor() { }

  sendMessage(message: Object) {
    this.test.next(message);
  }

  /* clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<Object> {
    return this.subject.asObservable();
  } */

}
