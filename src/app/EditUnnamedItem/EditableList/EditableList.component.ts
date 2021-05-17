import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { unnamedService } from '../../EditUnnamedItem/Edit.service';
import { unnamed } from '../EditItem';

@Component({
  selector: 'app-EditableList',
  templateUrl: './EditableList.component.html',
  styleUrls: ['./EditableList.component.css']
})

export class EditUnnamedItemComponent implements OnInit{
  Unnamed$: Observable<unnamed[]>;
  selectedPrice: number;

  showDiv = {
    price : false,
    name : false, 
  }

  constructor(
    private route: ActivatedRoute,
    private service: unnamedService,
  ) { }

  ngOnInit() {
    this.Unnamed$ = this.route.paramMap.pipe(
     switchMap(params => {
       this.selectedPrice = +params.get('price');
       return this.service.getunnamed();
      })
    );
  }

}



export interface editbutton {
  data: any;
}