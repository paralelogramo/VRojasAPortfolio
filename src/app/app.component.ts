import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  scrolling: boolean = false;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  private mobileCurrentTarget: any = null;

  @ViewChild('section1') section1: ElementRef;
  @ViewChild('section2') section2: ElementRef;
  @ViewChild('section3') section3: ElementRef;
  @ViewChild('section4') section4: ElementRef;
  @ViewChild('section5') section5: ElementRef;

  currentSection = 0;

  sections: ElementRef[];

  constructor(
    private deviceService: DeviceDetectorService,
  ) {
    this.sections = [];
    
  }

  ngOnInit() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    if (this.deviceService.isMobile()) {
      // document.getElementById('mobileAdvice').classList.remove('d-none');
      // document.getElementById('sectionContainer').classList.add('d-none');
    }

  }

  ngAfterViewInit() {
    this.sections.push(this.section1, this.section2, this.section3, this.section4, this.section5);
  }

  scrollToNextSection() {
    try {
      this.currentSection += 1;
      this.sections[this.currentSection].nativeElement.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {}
  }

  scrollToPreviousSection() {
    try {
      this.currentSection -= 1;
      this.sections[this.currentSection].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' }); 
    } catch (error) {}
  }

  scrollToSection(index: number) {
    this.currentSection = index;
    this.sections[this.currentSection].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (this.scrolling) {
      return;
    }

    this.scrolling = true;

    event.preventDefault();

    if (this.deviceService.isMobile()) {
      this.scrolling = false;
      return;
    }

    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      this.scrollToNextSection();
    } else {
      this.scrollToPreviousSection();
    }

    setTimeout(() => {
      this.scrolling = false;
    }, 600);
}
  
}
