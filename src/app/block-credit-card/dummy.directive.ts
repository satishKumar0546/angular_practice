import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDummy]'
})
export class DummyDirective {

  @Input()
  name : string;
  constructor(){
    console.log(this.name);
  }
}
