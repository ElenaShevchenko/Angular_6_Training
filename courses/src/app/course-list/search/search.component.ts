import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs/operators';
import {
  FormControl, FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnDestroy {
  searchForm = new FormGroup({
    searchValue: new FormControl(''),
  });
  @Output() search = new EventEmitter<string>();
  searchTerm$ = new Subject<string>();

  destroy$ = new Subject();

  constructor() {
    this.searchTerm$.pipe(
      debounceTime(400),
      filter ((term) => term.length > 2),
      distinctUntilChanged(),
      tap((term) => {
        console.log(term);
       return this.search.emit(term); }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}

