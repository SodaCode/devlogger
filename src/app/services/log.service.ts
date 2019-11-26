import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/26/2018') },
      { id: '2', text: 'Generated item', date: new Date('12/16/2019') },
      { id: '3', text: 'Generated thing', date: new Date('04/17/2018') },
    ]
  }

  getLogs() {
    return this.logs;
  }
}
