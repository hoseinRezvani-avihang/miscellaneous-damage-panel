import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shamsi'
})
export class ShamsiPipe implements PipeTransform {

  transform(value: Date): string {
    return new Intl.DateTimeFormat("fa-IR").format(new Date(value));
  }

}
