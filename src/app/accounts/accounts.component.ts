import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor() { }
  @Input()
  accountNumber : string;
  @Input()
  img : string;
  ngOnInit() {
  }

}
