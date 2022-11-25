import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  @Input('appIf') set appIf(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.TemplateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private vcRef: ViewContainerRef,
    private TemplateRef: TemplateRef<any>
  ) {}
}
