import {
  Component,
  Input,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'progress-slider',
  standalone: true,
  imports: [],
  templateUrl: './progress-slider.component.html',
  styleUrl: './progress-slider.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class ProgressSliderComponent implements OnInit {
  @Input() percentage: number = 0;
  @ViewChild('progressContainer') progressContainer!: ElementRef;
  // @ViewChild('progressRef', { static: true }) progressRef!: ElementRef;
  // @ViewChild('percentageRef', { static: true }) percentageRef!: ElementRef;
  percentageWidth: number = 100;
  constructor(
    //private renderer: Renderer2,
    private cdr: ChangeDetectorRef // private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // const progressContainerWidth = 500;
    // this.percentageWidth = Math.ceil(
    //   (this.percentage / 100) * progressContainerWidth
    // );
    // console.log('this.percentageWidth', this.percentageWidth);
  }

  ngAfterViewInit() {
    const width = this.progressContainer.nativeElement.offsetWidth;
    // console.log('Width:', width);
    this.percentageWidth = Math.ceil((this.percentage / 100) * width);
    this.cdr.detectChanges();
  }

  // ngAfterViewInit() {
  //   console.log('Here');
  //   if (this.progressContainer?.nativeElement) {
  //     const progressContainerWidth = this.renderer.selectRootElement(
  //       this.progressContainer.nativeElement
  //     ).offsetWidth;
  //     console.log('progressContainerWidth', progressContainerWidth);
  //     this.percentageWidth = Math.ceil(
  //       (this.percentage / 100) * progressContainerWidth
  //     );
  //     // console.log('percentageWidth', this.progressRef.nativeElement);
  //     // //this.renderer.setStyle(this.progressRef.nativeElement, 'width', `100px`);
  //     // this.elementRef.nativeElement.querySelector('.progress'),
  //     //   'width',
  //     //   `100px`;
  //     // //this.renderer.setStyle(this.percentageRef.nativeElement, 'left', `100px`);
  //     // this.elementRef.nativeElement.querySelector('.percentage'),
  //     //   'left',
  //     //   `100px`;
  //   }
  //   this.cdr.detectChanges();
  // }
}
