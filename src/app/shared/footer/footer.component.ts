import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectToWhatsApp() {
    const phoneNumber = '+5493794701370'; 
    const url = `https://wa.me/${phoneNumber}`;

    if (navigator.userAgent.match(/WhatsApp\/[0-9.]+/)) {
        // Si el usuario está usando la aplicación de Windows de WhatsApp, abrimos un enlace con el protocolo "whatsapp://".
        window.open(`whatsapp://send?phone=${phoneNumber}`);
    } else {
        // Si el usuario no está usando la aplicación de Windows de WhatsApp, abrimos un enlace con el protocolo "https://wa.me/".
        window.open(url);
    }
}

}
