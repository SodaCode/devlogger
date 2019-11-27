import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable } from "rxjs";

import { of } from "rxjs";
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/26/2018') },
      { id: '2', text: 'Generated item', date: new Date('12/16/2019') },
      { id: '3', text: 'Generated thing', date: new Date('04/17/2018') },
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
