import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: 'round' })
export class RoundPipe  implements PipeTransform {
  transform(input: number) {
    return input.toFixed(2);
  }
}
