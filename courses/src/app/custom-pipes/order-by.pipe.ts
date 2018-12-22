import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(allItems: any[]): any {
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
