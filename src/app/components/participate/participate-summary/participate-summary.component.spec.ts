import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateSummaryComponent } from './participate-summary.component';

describe('ParticipateSummaryComponent', () => {
  let component: ParticipateSummaryComponent;
  let fixture: ComponentFixture<ParticipateSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipateSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
