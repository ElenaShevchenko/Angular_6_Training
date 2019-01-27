import {Component, OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  public isAuthenticated: boolean;
  title = 'courses';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  logout() {
    console.log('logout');
  }
}
