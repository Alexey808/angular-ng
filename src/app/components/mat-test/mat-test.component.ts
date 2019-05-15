import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-test',
  templateUrl: './mat-test.component.html',
  styleUrls: ['./mat-test.component.scss']
})
export class MatTestComponent implements OnInit {
  formControl: FormControl = null;

  selected = null;
  optionList = [];

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl('');
    this.formControl.setValue('test value');


    this.optionList = [
      {id: 1, title: 'title1'},
      {id: 2, title: 'title2'},
      {id: 3, title: 'title3'}
    ];
    this.selected = this.optionList[1];


    console.log(this);
  }

  onCommentChange() {
    console.log(this.formControl);
  }

}
