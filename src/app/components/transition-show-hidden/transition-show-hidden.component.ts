import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition-show-hidden',
  templateUrl: './transition-show-hidden.component.html',
  styleUrls: ['./transition-show-hidden.component.scss']
})
export class TransitionShowHiddenComponent implements OnInit {
  turn = false;
  constructor() { }

  ngOnInit() {
  }

}
