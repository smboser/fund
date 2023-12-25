import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFundraisingPageComponent } from './team-fundraising-page.component';

describe('TeamFundraisingPageComponent', () => {
  let component: TeamFundraisingPageComponent;
  let fixture: ComponentFixture<TeamFundraisingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamFundraisingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamFundraisingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
