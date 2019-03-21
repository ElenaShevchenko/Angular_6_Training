import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightItem]'
})
export class HighlightItemDirective implements OnInit {
  @Input('appHighlightItem') itemDate: Date;
  constructor(private el: ElementRef, private render: Renderer2 ) {
  }

  ngOnInit() {
    const currentDate: Date = new Date();
    const copyDate: Date = new Date();
    const minDate = copyDate.setDate(currentDate.getDate() - 14);

     if ((this.itemDate.getTime() < currentDate.getTime()) && (this.itemDate.getTime() >= minDate)) {
       this.render.setStyle(this.el.nativeElement, 'border-color', 'green');
     } else if (this.itemDate.getTime() > currentDate.getTime()) {
       this.render.setStyle(this.el.nativeElement, 'border-color', 'blue');
     } else {
       this.render.setStyle(this.el.nativeElement, 'border-color', 'gray');
     }
  }
}
