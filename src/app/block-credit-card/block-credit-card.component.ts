import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'block-credit-card',
  templateUrl: './block-credit-card.component.html',
  styleUrls: ['./block-credit-card.component.css']
})
export class BlockCreditCardComponent implements OnInit {

  constructor() { }
     @Input()
     selectedPage : string = "block-capture";

  ngOnInit() {
  }

}
