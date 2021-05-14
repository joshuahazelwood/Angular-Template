import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { unnamed } from '../EditItem';
import { switchMap } from 'rxjs/operators';
import { unnamedService } from '../../EditUnnamedItem/Edit.service';

@Component({
  selector: 'app-EditableList',
  templateUrl: './EditableList.component.html',
  styleUrls: ['./EditableList.component.css']
})

export class EditUnnamedItemComponent implements OnInit{
  name: any;

  Unnamed$: Observable<unnamed[]>;
  selectedPrice: number;

  constructor(
    private route: ActivatedRoute,
    private service: unnamedService,
    
  ) { }

  ngOnInit() {
    this.Unnamed$ = this.route.paramMap.pipe(
     switchMap(params => {
        // (+) before `params.get()` turns the string into a number
       this.selectedPrice = +params.get('price');
       return this.service.getunnamed();
      })
    );
  }

}