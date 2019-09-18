 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 import { AppComponent } from './app.component';
 import { NgxWhastappButtonModule } from '../../projects/ngx-whatsapp-button/src/lib/ngx-whatsapp-button.module';

 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule,
     NgxWhastappButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
