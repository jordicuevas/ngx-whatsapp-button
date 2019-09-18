 import { NgModule } from '@angular/core';
 import { NgxWhastappButtonComponent} from './ngx-whatsapp-button.component';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 @NgModule({
  imports: [
    FontAwesomeModule
  ],
  declarations: [NgxWhastappButtonComponent],
  exports: [NgxWhastappButtonComponent]
})
export class NgxWhastappButtonModule { }
