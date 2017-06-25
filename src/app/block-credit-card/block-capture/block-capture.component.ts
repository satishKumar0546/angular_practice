import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[block-capture]'
//  templateUrl: './block-capture.component.html',
//  styleUrls: ['./block-capture.component.css']
})
export class BlockCaptureComponent implements OnInit {

  constructor(private _elRef: ElementRef, private _renderer: Renderer) {
         console.log('!!!!!!!!!');
        this._renderer.setElementAttribute(this._elRef.nativeElement, 'another-fancy-attribute', 'HERE I AM !!');
   }

  ngOnInit() {

  }

}
