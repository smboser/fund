import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStartDonationComponent } from './team-start-donation.component';

describe('TeamStartDonationComponent', () => {
  let component: TeamStartDonationComponent;
  let fixture: ComponentFixture<TeamStartDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamStartDonationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamStartDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
