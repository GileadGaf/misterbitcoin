import { Directive, Input ,ElementRef } from '@angular/core';

@Directive({
  selector: '[input-limit]'
})
export class InputLimitDirective {
  @Input('input-limit') maxNumber;
  constructor(private $elementRef:ElementRef) {
    $elementRef.nativeElement.addEventListener('input', (ev) => {
      const { value } = ev.target;
        if (+value > this.maxNumber) {
          ev.target.value = this.maxNumber;
          ev.preventDefault();
        }
    })
  }

}
