import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchButton = new EventEmitter<string>();
  constructor() { }

  searchValue = '';

  onSearch() {
    this.clickButton.emit(this.searchValue);
  }

  ngOnInit() {
  }

}
