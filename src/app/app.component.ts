import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as M from "materialize-css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  ngOnInit() {
    M.AutoInit();
  }

  ngAfterViewInit() {
  }
}
