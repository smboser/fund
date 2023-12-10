import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipclockComponent } from './flipclock.component';

describe('FlipclockComponent', () => {
  let component: FlipclockComponent;
  let fixture: ComponentFixture<FlipclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
