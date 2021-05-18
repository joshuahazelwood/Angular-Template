import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { unnamedService, titlesService } from '../../EditUnnamedItem/Edit.service';
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
  selectedelement3: number;
  

  showDiv = {
    element2 : false,
    element1 : false, 
    header3: false,
    element3: false,
  }

  constructor(
    private route: ActivatedRoute,
    private service: unnamedService,
    private service2: titlesService
  ) { }

  ngOnInit() {
    this.Unnamed$ = this.route.paramMap.pipe(
     switchMap(params => {
       this.selectedelement2 = +params.get('element2');
       return this.service.getunnamed();
      })
    );
    
    this.Titles$ = this.route.paramMap.pipe(
     switchMap(params => {
       this.selectedelement3 = +params.get('element3');
       return this.service2.gettitles();
      })
    );
  }
}


