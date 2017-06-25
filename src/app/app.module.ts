import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SelectModule } from 'ng-select';

//import { AppComponent } from '../dcl/app.component';
import { AppComponent } from './app.component';
import { AppDropdwonComponent } from './app-dropdown.component';
import { BlockCreditCardComponent } from './block-credit-card/block-credit-card.component';
import { BlockCaptureComponent } from './block-credit-card/block-capture/block-capture.component';
import { BlockVerifyComponent } from './block-credit-card/block-verify/block-verify.component';
import { BlockConfirmComponent } from './block-credit-card/block-confirm/block-confirm.component';
import { DummyDirective } from './block-credit-card/dummy.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { HtmlDropdownComponent } from "./html-dropdown.component";
//import { RichDemoComponent } from "./richDropdown/richDropdown.component";


@NgModule({
  declarations: [
    AppComponent,
    BlockCreditCardComponent,
    BlockCaptureComponent,
    BlockVerifyComponent,
    BlockConfirmComponent,
    DummyDirective,
    AccountsComponent,
    HtmlDropdownComponent,
    AppDropdwonComponent
    //RichDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
