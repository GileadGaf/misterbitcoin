import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'singlePlur'
})
export class SinglePlurPipe implements PipeTransform {

  transform(value: number,word:string): string {
    if (value !== 1) word += 's';
    return word;
  }

}
