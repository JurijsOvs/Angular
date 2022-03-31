import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[proShade]',
})
export class ShadeDirective implements OnInit{
  @Input() proShade: boolean = false;
  constructor(private ref: ElementRef, private render: Renderer2) {
  
  }

  ngOnInit(): void {
    if (this.proShade) {
      this.render.setStyle(
        this.ref.nativeElement,
        'background-color',
        'lightgray'
      );
    }
  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.render.setStyle(
      this.ref.nativeElement,
      'background-color',
      'gray'
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.render.setStyle(
      this.ref.nativeElement,
      'background-color',
      this.proShade ? 'lightgray' : 'white'
    );
  }
}
