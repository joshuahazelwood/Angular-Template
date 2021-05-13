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
    // TODO: send the message _after_ fetching the unnamed
    this.messageService.add('unnamedService: fetched unnamed');
    return of(UNNAMED);
  }

  getUNNAMED(price: number | string) {
    return this.getunnamed().pipe(
      // (+) before `id` turns the string into a number
      map((UNNAMED: unnamed[]) => UNNAMED.find(unnamed => unnamed.price === +price))
    );
  }
}