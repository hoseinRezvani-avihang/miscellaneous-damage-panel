import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {

  deleteSub = new Subject<string>();

  constructor() { }
}
