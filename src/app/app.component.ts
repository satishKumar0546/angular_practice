import { Component, ViewChild, ElementRef, Renderer, OnChanges, OnInit, TemplateRef} from '@angular/core';
import { BlockCaptureComponent } from './block-credit-card/block-capture/block-capture.component';
import { Account } from './accounts/Account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  title = "";
  blockCapture: string ="block-capture";
  @ViewChild('capture') capture : ElementRef;
  @ViewChild('accountsTemplate' ) accountsTemplate: TemplateRef<any>;
  getCurrrentView(){
    return "capture";
  }
  hiHello(event: Event){
//  console.dir(this.capture.nativeElement.attributes['another-fancy-attribute'].value);
      //console.log(this.capture);
      //this.capture.nativeElement.removeAttribute('capture')
  }
  @ViewChild('selectedValue') selects:ElementRef;

  accounts=[
      {
        "accountNumber": '1234-5342-4565',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      },
      {
        "accountNumber": '6587-3487-4576',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      },
      {
        "accountNumber": '8743-0987-6587',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      },
      {
        "accountNumber" : '5342-1234-4565',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      },
      {
        "accountNumber": '3345-2342-4565',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      },
      {
        "accountNumber": '6577-7656-3421',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      },
      {
        "accountNumber": '7654-9877-5543',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      },
      {
        "accountNumber": '5654-9870-0098',
        "img":"https://cdn3.iconfinder.com/data/icons/finalflags/256/India-Flag.png"
      }
  ];



  options: Array<any>;
    values: string[];
    selected(event:any) {
      console.log("slected: "+event.value.accountNumber)
    //console.log(event.value.accountNumber)
    }

    deselected(event: any) {
      console.log("de-selected: "+event.value.accountNumber)
    //console.log(event)
    }

    ngOnInit() {
    console.log(this.selects);
      this.options = [];
      for (let i = 0; i < this.accounts.length; i++) {
        this.options.push({ value: this.accounts[i], label:'<accounts></accounts>'});
      }
      this.values = [this.accounts[0].accountNumber];
    }










   ngOnChanges(){
        this.capture.nativeElement.setAttribute('capture','');
  }

}
