import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    let result = value || '';
    const words = value.split(/\s+/);
    if (words.length > 10) {
        result = words.slice(0, 10).join(' ') + "...";
    }
    return result;
  }

}
