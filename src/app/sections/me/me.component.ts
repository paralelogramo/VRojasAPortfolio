import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.sass']
})
export class MeComponent {
  mouseX = 0;
  mouseY = 0;
  containerCenterX = 0;
  containerCenterY = 0;
  blob1X = 0;
  blob1Y = 0;
  blob2X = 0;
  blob2Y = 0;

  imageContainer: HTMLElement;

  constructor(
    private blob_1: ElementRef,
    private blob_2: ElementRef,
    private base: ElementRef
  ) { }

  ngAfterViewInit() {
    this.blob_1.nativeElement = document.querySelector('.blob-1');
    this.blob_2.nativeElement = document.querySelector('.blob-2');
    this.base.nativeElement = document.querySelector('.me-base');
  }

  onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const containerRect = this.base.nativeElement.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;
    const deltaX = mouseX - containerCenterX;
    const deltaY = mouseY - containerCenterY;
    const factor1 = 25;
    const factor2 = 40;


    this.blob_1.nativeElement.style.transform = `translate(${deltaX / factor1}px, ${deltaY / factor1}px)`;

    this.blob_2.nativeElement.style.transform = `translate(${deltaX / factor2}px, ${deltaY / factor2}px)`;
  }
}
