import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  social_network: string = '';


  redirectTo(social_network: string) {
    switch (social_network) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/vicente-rojas-aranda-864377132/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/paralelogramo', '_blank');
        break;
      case 'gmail':
        window.location.href = "mailto:vrojasaranda@gmail.com?subject=I want to contact with you!&body=Hello Vicente! I want to talk with you about...";
        break;
      case 'instagram':
        window.open('https://www.instagram.com/vicenterojasaranda/', '_blank');
        break;
    }
  }

  enterTo(social_network: string){
    switch (social_network) {
      case 'linkedin':
        document.querySelectorAll('.contact-text').forEach((element: HTMLElement) => element.style.textShadow = '2px 2px 2px #0077b5');
        break;
      case 'github':
        document.querySelectorAll('.contact-text').forEach((element: HTMLElement) => element.style.textShadow = '2px 2px 2px #969696');
        break;
      case 'gmail':
        document.querySelectorAll('.contact-text').forEach((element: HTMLElement) => element.style.textShadow = '2px 2px 2px #db4437');
        break;
      case 'instagram':
        document.querySelectorAll('.contact-text').forEach((element: HTMLElement) => element.style.textShadow = '2px 2px 2px #bc5bc3');
        break;
    }
  }
}
