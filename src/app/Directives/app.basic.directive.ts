import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[basicdirective]"
})
export class BasicDirective {
  //input fields
  @Input("basicdirective") highlightColor: string;
  constructor(private el: ElementRef) {
    //elRef.nativeElement.innerHTML = "Bye";
    //this.highlight("orange");
  }

  @HostBinding("class") itemClass: string = "list-group-item";
  // @HostListener("mouseenter") onMouseEnter() {
  // this.highlight(this.highlightColor);
  //}
  // @HostListener('click', ['$event.target'])
  // onClick(btn) {
  // console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  // }
  @HostListener("click", ["$event.target"]) onClick(ctrl) {
    if (!this.el.nativeElement.classList.contains("active"))
      this.el.nativeElement.classList.add("active");
    else this.el.nativeElement.classList.remove("active");
  }
  private highlight(color: string) {
    console.log(color);
    this.el.nativeElement.style.backgroundColor = color;
  }
}
