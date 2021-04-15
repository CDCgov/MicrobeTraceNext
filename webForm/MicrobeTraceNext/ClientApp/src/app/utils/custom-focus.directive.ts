import { Directive, Attribute, ElementRef, HostListener, destroyPlatform, OnDestroy, Input, Renderer2 } from '@angular/core';
/**
 * This directive allows to override default tab order for page controls.
 * Particularly useful for working around the modal dialog TAB issue
 * (when tab key allows to move focus outside of dialog).
 *
 * Usage: add "custom-taborder" and "tab-next='next_control'"/"tab-prev='prev_control'" attributes
 * to the first and last controls of the dialog.
 *
 * For example, the first control is <input type="text" name="ctlName">
 * and the last one is <button type="submit" name="btnOk">
 *
 * You should modify the above declarations as follows:
 * <input type="text" name="ctlName" custom-taborder tab-prev="btnOk">
 * <button type="submit" name="btnOk" custom-taborder tab-next="ctlName">
 */
@Directive({
  selector: '[custom-focus]'
})
export class CustomFocusDirective {
  @Input('custom-focus') isFocused: boolean;

  constructor(
    private hostElement: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    if (this.isFocused) {
      this.renderer.selectRootElement(this.hostElement.nativeElement).focus();
    }
  }

}
