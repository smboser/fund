import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftChartComponent } from './left-chart.component';

describe('LeftChartComponent', () => {
  let component: LeftChartComponent;
  let fixture: ComponentFixture<LeftChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
