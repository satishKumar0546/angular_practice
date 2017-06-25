//our root app component
import {Component, Directive, NgModule, ElementRef, Renderer, ViewChild} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Directive({
  selector: '[foo]'
})
export class MyFancyDirective {

  constructor (private _elRef: ElementRef, private _renderer: Renderer) { console.log('!'); }

  ngOnInit() {
    this._renderer.setElementAttribute(this._elRef.nativeElement, 'another-fancy-attribute', 'HERE I AM !!');
  }

}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2 #header foo (click)="headerClicked()">Hello {{name}}</h2>
    </div>
  `,
})
export class App {

  @ViewChild('header') header: ElementRef;

  name:string;
  constructor() {
    this.name = 'Angular2'
  }

  headerClicked() {
    console.dir(this.header.nativeElement.attributes['another-fancy-attribute'].value);
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, MyFancyDirective ],
  bootstrap: [ App ]
})
export class AppModule {}
