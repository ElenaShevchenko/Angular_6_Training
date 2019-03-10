import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(time: number): string | number {
    if (!time) {
      return time;
    }
    if (time >= 60) {
      const hour = Math.floor(time / 60) + 'h';
      const min = time % 60 ?  (time % 60 + 'min') : '';
      return hour + ' ' + min;
    }
    return time + 'h';
  }

}
