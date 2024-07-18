import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('focusElement') element!: ElementRef;
  @ViewChild('paragraphElement') paraElement!: ElementRef;

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();  // focusElement input in HTML element will be focussed
    this.paraElement.nativeElement.style.color = 'red';
  }
}
