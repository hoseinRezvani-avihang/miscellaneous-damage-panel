import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DeleteSubConfig } from '../models/service.models';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {

  deleteSub = new Subject<DeleteSubConfig>();

  constructor() { }
}
