import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seperator'
})
export class SeperatorPipe implements PipeTransform {

  transform(value: any): string {
    if (value !== null && value !== undefined && value?.toString()?.trim() !== "") {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return value;
  }

}
