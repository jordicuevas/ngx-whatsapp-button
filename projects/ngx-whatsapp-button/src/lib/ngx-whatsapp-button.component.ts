import { Component, OnInit, Input } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'jjva-ngx-whatsapp-button',
  templateUrl: './ngx-whatsapp-button.component.html',
  styleUrls: ['./ngx-whatsapp-button.component.css']
})
export class NgxWhastappButtonComponent implements OnInit {
   @Input('ngx_whatsapp_phone') ngx_whatsapp_phone: string;
   @Input('ngx_whatsapp_text') ngx_whatsapp_text: string;

   public ngx_whatsapp_icon;
   public ngx_whatsapp_url = 'https://api.whatsapp.com/send' ;
   public ngx_whatsapp_url_full;
  constructor() {

  }

  ngOnInit() {
    // we set the icon
    this.ngx_whatsapp_icon = faWhatsapp;
    //verify if we had a number
    this.ngx_whatsapp_phone = ( this.ngx_whatsapp_phone !== undefined ) ? this.ngx_whatsapp_phone : '';
    this.ngx_whatsapp_text = ( this.ngx_whatsapp_text !== undefined ) ? this.ngx_whatsapp_text : '';
    this.ngx_whatsapp_url = `${this.ngx_whatsapp_url}?phone=${this.ngx_whatsapp_phone}&text=${this.ngx_whatsapp_text}`;
  }

}
