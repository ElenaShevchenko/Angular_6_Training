import {Component, Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ CourseService ]
})
export class SearchComponent {
  @Output() searchButton = new EventEmitter<Subject<string>>();
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private service: CourseService) {
    this.service.search(this.searchTerm$).subscribe(results => {
    });
  }
}

