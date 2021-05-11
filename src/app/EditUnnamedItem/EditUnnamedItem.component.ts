import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { unnamed } from '../EditUnnamedItem/EditUnnamedItem';

@Component({
  selector: 'app-EditUnnamedItem',
  templateUrl: './EditUnnamedItem.component.html',
  styleUrls: ['./EditUnnamedItem.component.css']
})

export class EditUnnamedItemComponent implements OnInit{
  name: any;

  Unnamed$: Observable<unnamed[]>;
  selectedPrice: number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
     this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
  }

}