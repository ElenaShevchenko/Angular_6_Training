import { Pipe, PipeTransform } from '@angular/core';
import {CourseItem} from '../course-list/course-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(allItems: CourseItem[]): CourseItem[] {
   if (!allItems) {
     return allItems;
   }
   const sortedItems = [...allItems];
    sortedItems.sort((a, b) => {
      return b.creationDate.getTime() - a.creationDate.getTime();
    });
    return sortedItems;
  }

}
