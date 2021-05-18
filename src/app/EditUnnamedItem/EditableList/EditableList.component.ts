import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { unnamedService } from '../../EditUnnamedItem/Edit.service';
import { unnamed } from '../EditItem';
import { titles } from '../EditItem';


@Component({
  selector: 'app-EditableList',
  templateUrl: './EditableList.component.html',
  styleUrls: ['./EditableList.component.css']
})

export class EditUnnamedItemComponent implements OnInit{
  Unnamed$: Observable<unnamed[]>;
  Titles$: Observable<titles[]>;
  selectedelement2: number;
  selectedelement3: string;

  

  showDiv = {
    element2 : false,
    element1 : false, 
    title: false
  }
  
  

  constructor(
    private route: ActivatedRoute,
    private service: unnamedService,
  ) { }

  ngOnInit() {
    this.Unnamed$ = this.route.paramMap.pipe(
     switchMap(params => {
       this.selectedelement2 = +params.get('element2');
       return this.service.getunnamed();
      })
    );
  }

}


