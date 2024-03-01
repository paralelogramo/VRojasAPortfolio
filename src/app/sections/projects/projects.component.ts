import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {

  @ViewChild('ppsslongdescription') ppssld: ElementRef;
  @ViewChild('tunegociolongdescription') tunegociold: ElementRef;
  
  constructor(
    
  ) { }

  redirectToPPSS() {
    window.open('http://dbg.utalca.cl/ppss', '_blank', 'noopener,noreferrer');
  }

  enterPPSS() {
    this.ppssld.nativeElement.classList.add('ppss-long-description-container-no-filter');
    this.ppssld.nativeElement.classList.remove('ppss-long-description-container');
  }

  leavePPSS() {
    this.ppssld.nativeElement.classList.remove('ppss-long-description-container-no-filter');
    this.ppssld.nativeElement.classList.add('ppss-long-description-container');
  }

  enterTuNegocio() {
    this.tunegociold.nativeElement.classList.add('tunegocio-long-description-container-no-filter');
    this.tunegociold.nativeElement.classList.remove('tunegocio-long-description-container');
  }

  leaveTuNegocio() {
    this.tunegociold.nativeElement.classList.remove('tunegocio-long-description-container-no-filter');
    this.tunegociold.nativeElement.classList.add('tunegocio-long-description-container');
  }
}
