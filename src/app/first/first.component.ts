import {Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  header="Placeholder 1";

  @ViewChild('autosize') autosize: CdkTextareaAutosize;


  constructor(private _FirstComponent: NgZone) { }
  ngOnInit(): void {
  throw new Error('Method not implemented.');
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._FirstComponent.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
