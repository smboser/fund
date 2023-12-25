import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWhoAreYouComponent } from './team-who-are-you.component';

describe('TeamWhoAreYouComponent', () => {
  let component: TeamWhoAreYouComponent;
  let fixture: ComponentFixture<TeamWhoAreYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamWhoAreYouComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamWhoAreYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
