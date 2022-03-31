import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binary'
})
export class BinaryPipe implements PipeTransform {

  transform(value: boolean): unknown {
    return value ? 'ON' : 'OFF';
  }

}
