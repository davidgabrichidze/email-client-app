import { Pipe, PipeTransform } from '@angular/core';

/*
  This pipe truncates a string.
  Use it like so {{ String expression | truncate:10 }}
  This truncates the string to 10 letters and adds '...' to end.
*/

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  /*
  The transform method is essential to a pipe. The PipeTransform interface defines that method and guides both tooling and the compiler. Technically, it's optional; Angular looks for and executes the transform method regardless.
  */

  transform(value: string, limit: number): string {
    return ((value && value.length) || !value) < limit
      ? value
      : value.slice(0, limit) + '...';
  }
}
