import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[appChange]",
})
export class ChangeDirective {
  @Input("appInput") format!: string;
  constructor(private el: ElementRef) {}
  @HostListener("blur") onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == "lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toLocaleUpperCase();
    }
  }
}
