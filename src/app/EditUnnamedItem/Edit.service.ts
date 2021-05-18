import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { unnamed } from './EditItem';
import { UNNAMED } from './Edit-list';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class unnamedService {

  constructor(private messageService: MessageService) { }

  getunnamed(): Observable<unnamed[]> {
    
    this.messageService.add('unnamedService: fetched unnamed');
    return of(UNNAMED);
  }

  getUNNAMED(element2: number | string) {
    return this.getunnamed().pipe(
      
      map((UNNAMED: unnamed[]) => UNNAMED.find(unnamed => unnamed.element2 === +element2))
    );
  }
}