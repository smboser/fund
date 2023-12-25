import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDonationComponent } from './start-donation.component';

describe('StartDonationComponent', () => {
  let component: StartDonationComponent;
  let fixture: ComponentFixture<StartDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartDonationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
