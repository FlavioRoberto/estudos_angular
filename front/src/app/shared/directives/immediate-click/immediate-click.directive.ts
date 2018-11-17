import { Directive, OnInit, ElementRef } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Directive({
  selector: '[apImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private plataformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    return (
      this.plataformDetector.isPlatformBrowser() &&
      this.el.nativeElement.click()
    );
  }
}
