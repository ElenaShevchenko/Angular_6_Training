import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByTitle'
})
@Injectable({
  providedIn: 'root'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchValue?: any): any {
    if (!items || !searchValue) {
      return items;
    }
    searchValue = searchValue.toLowerCase();
    return items.filter( item => {
      return item.title.toLowerCase().includes(searchValue);
    });
  }
}
