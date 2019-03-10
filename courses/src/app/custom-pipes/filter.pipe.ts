import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {CourseItem} from '../course-list/course-item.model';

@Pipe({
  name: 'filterByTitle'
})
@Injectable({
  providedIn: 'root'
})
export class FilterPipe implements PipeTransform {

  transform(items: CourseItem[], searchValue?: string): CourseItem[] {
    if (!items || !searchValue) {
      return items;
    }
    searchValue = searchValue.toLowerCase();
    return items.filter( item => {
      return item.title.toLowerCase().includes(searchValue);
    });
  }
}
